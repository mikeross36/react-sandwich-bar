import React from "react"
import nextId from "react-id-generator"

import {
    FaFacebook,
    FaInstagram,
    FaTwitter} from "react-icons/fa"

export const socialIcons = [
    {
        id:nextId(),
        url: "https://www.facebook.com/",
        icon: <FaFacebook />
    },
    {
        id:nextId(),
        url: "https://www.instagram.com/",
        icon: <FaInstagram />
    },
    {
        id:nextId(),
        url: "https://twitter.com/?lang=en",
        icon: <FaTwitter />
    },
]