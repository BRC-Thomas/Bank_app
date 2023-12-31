import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { GoHomeFill } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center leading-4 mt-4 pr-6 sm:shrink-0 sm:border-r-2 sm:w-fit">
                                <Link href="/">
                                    <div className="flex ">
                                        <ApplicationLogo />
                                        <p className={"hidden sm:block"}>
                                            <span
                                                className={
                                                    "font-black tracking-tighter "
                                                }
                                            >
                                                BankBoard
                                            </span>
                                            <br />
                                            <span
                                                className={
                                                    "font-medium text-gray-400"
                                                }
                                            >
                                                Love is in the bank.
                                            </span>
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 gap-8 mt-2 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    <GoHomeFill
                                        className={"w-6 h-6 mb-2 mx-auto"}
                                        style={{
                                            color: route().current("dashboard")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Dashboard</p>
                                </NavLink>

                                <NavLink
                                    href={route("invoice.index")}
                                    active={route().current("invoice.*")}
                                >
                                    <TbFileInvoice
                                        className={"w-6 h-6 mb-2  mx-auto"}
                                        style={{
                                            color: route().current("invoice.*")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Invoice</p>
                                </NavLink>

                                <NavLink
                                    href={route("income.index")}
                                    active={route().current("income.*")}
                                >
                                    <FaWallet
                                        className={"w-5 h-6 mb-2 mx-auto"}
                                        style={{
                                            color: route().current("income.*")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Wallet</p>
                                </NavLink>

                                <NavLink
                                    href="#"
                                    active={route().current("community")}
                                >
                                    <HiUserGroup
                                        className={"w-6 h-6 mb-2 mx-auto"}
                                        style={{
                                            color: route().current("community")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Community</p>
                                </NavLink>

                                <NavLink
                                    href="#"
                                    active={route().current("analytics")}
                                    className={"hidden md:block  "}
                                >
                                    <IoAnalytics
                                        className={"w-6 h-6 mb-2 mx-auto"}
                                        style={{
                                            color: route().current("analytics")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Analytics</p>
                                </NavLink>

                                <NavLink
                                    href="#"
                                    active={route().current("settings")}
                                    className={"hidden lg:block"}
                                >
                                    <BsGearFill
                                        className={"w-6 h-6 mb-2 mx-auto"}
                                        style={{
                                            color: route().current("settings")
                                                ? "#4f46e5"
                                                : "#cecece",
                                        }}
                                    />
                                    <p>Settings</p>
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("invoice.index")}
                            active={route().current("invoice.*")}
                        >
                            Invoice
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("income.index")}
                            active={route().current("income.*")}
                        >
                            Wallet
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="#"
                            active={route().current("community")}
                        >
                            Community
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="#"
                            active={route().current("analytics")}
                        >
                            Analytics
                        </ResponsiveNavLink>

                        <ResponsiveNavLink
                            href="#"
                            active={route().current("settings")}
                        >
                            Settings
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {/*{header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}*/}

            <main>{children}</main>
        </div>
    );
}
