import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-10">
                <div className="flex justify-center items-center">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-4">CryptoHub</h2>
                            <p className="text-sm">
                                Track and learn crypto
                            </p>
                        </div>

                        <div></div>


                        {/* Contact Info */}
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
                            <ul className="space-y-2 text-sm">
                                <li>Kota Singkawang, Kalimantan Barat</li>
                                <li>Email: bimadev06@gmail.com</li>
                                <li>Phone: +62 822 5404 4783</li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com/bima.jovanta.7"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={24} />
                                </a>
                                <a
                                    href="https://wa.me/6282254044783"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="Twitter"
                                >
                                    <FaWhatsapp size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/biimaa_jo"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/bimadev"
                                    className="text-gray-300 hover:text-white"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
