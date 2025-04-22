import "./top.css";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ShoppingCart, User } from 'lucide-react';

export default function TopSection() {
    const { lang } = useParams();
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isLanguageOpen) setIsLanguageOpen(false);
    };

    const toggleLanguage = () => {
        setIsLanguageOpen(!isLanguageOpen);
    };

    return (
        <div className="w-full">
            {/* Mobil holat uchun yuqori menyu */}
            <div className="bg-white shadow-sm border-b border-gray-200 py-2">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-full items-center justify-between flex-wrap top_section_control">
                            <div className="text-sm text-gray-700 flex gap-2 overflow-x-auto whitespace-nowrap">
                                <a href="https://growth.pecb.com/skills/" target="_blank" className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm top-left-title">PECB {t("skills")}</a>
                                <a href="https://conference.pecb.com/" target="_blank" className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm top-left-title">PECB {t("conference")}</a>
                                <a href="https://insights.pecb.com/" target="_blank" className="text-gray-600 hover:text-gray-900 px-2 py-1 text-sm top-left-title">PECB {t("magazine")}</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href="https://pecb.com/en/login" className="flex items-center text-sm top-left-title">
                                    <User size={16}  strokeWidth={3} className="mr-1 text-red-700 top-icon" />
                                    <span>{t("login")}</span>
                                </a>
                                <a href="https://pecb.com/en/partnerInitial" className="text-gray-600 hover:text-gray-900 text-sm top-left-title">{t("partner_with_us")}</a>
                                <a href="https://store.pecb.com/" target="_blank" className="text-gray-600 hover:text-gray-900 flex items-center text-sm top-left-title">
                                    <ShoppingCart size={16} strokeWidth={3} className="mr-1 text-red-700 top-icon" />
                                    <span>{t("store")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}