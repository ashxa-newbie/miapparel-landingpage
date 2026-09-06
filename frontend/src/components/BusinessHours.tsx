import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';

type StoreStatus = {
    isOpen: boolean;
    message: string;
};

function getStoreStatus(): StoreStatus {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).formatToParts(new Date());

    const getPart = (type: Intl.DateTimeFormatPartTypes) =>
        parts.find((part) => part.type === type)?.value ?? '';

    const day = getPart('weekday');
    const hour = Number(getPart('hour'));
    const minute = Number(getPart('minute'));
    const currentMinutes = hour * 60 + minute;

    const openingTime = 8 * 60;

    if (day === 'Sun') {
        return {
            isOpen: false,
            message: 'Hari Minggu kami libur',
        };
    }

    const closingTime =
        day === 'Sat' ? 18 * 60 : 20 * 60;

    const isOpen =
        currentMinutes >= openingTime &&
        currentMinutes < closingTime;

    return {
        isOpen,
        message: isOpen
            ? `Melayani sampai pukul ${day === 'Sat' ? '18.00' : '20.00'
            } WIB`
            : 'Kami kembali buka pukul 08.00 WIB',
    };
}

export default function BusinessHours() {
    const [status, setStatus] = useState<StoreStatus>(
        getStoreStatus()
    );

    useEffect(() => {
        const updateStatus = () => {
            setStatus(getStoreStatus());
        };

        updateStatus();

        const interval = window.setInterval(
            updateStatus,
            60_000
        );

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-1">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Status hari ini */}
                        <div className="flex items-center gap-4">
                            <div
                                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${status.isOpen
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}
                            >
                                <Clock3 className="h-5 w-5" />
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full ${status.isOpen
                                            ? 'bg-green-500 animate-pulse'
                                            : 'bg-red-500'
                                            }`}
                                    />

                                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                                        {status.isOpen
                                            ? 'Kami buka hari ini'
                                            : 'Kami sedang tutup'}
                                    </h3>
                                </div>

                                <p className="mt-1 text-sm text-gray-500">
                                    {status.message}
                                </p>
                            </div>
                        </div>

                        {/* Jam operasional */}
                        <div className="border-t border-gray-200 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                                <div>
                                    <span className="text-gray-500">
                                        Senin–Jumat:
                                    </span>{' '}

                                    <span className="font-bold text-gray-900">
                                        08.00–20.00
                                    </span>
                                </div>

                                <div>
                                    <span className="text-gray-500">
                                        Sabtu:
                                    </span>{' '}

                                    <span className="font-bold text-gray-900">
                                        08.00–18.00
                                    </span>
                                </div>

                                <div>
                                    <span className="text-gray-500">
                                        Minggu:
                                    </span>{' '}

                                    <span className="font-bold text-red-600">
                                        Libur
                                    </span>
                                </div>
                            </div>

                            <p className="mt-2 text-xs text-gray-400">
                                Waktu Indonesia Barat (WIB)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}