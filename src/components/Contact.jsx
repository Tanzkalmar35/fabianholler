import React, {useRef, useState} from 'react'
import {SectionWrapper} from "../hoc/";
import {fadeIn, slideIn} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {EarthCanvas} from "./canvas/index.js";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            "service_7r3g08f",
            "template_es4pw9t",
            {
                fromName: form.name,
                toName: "Fabian",
                fromEmail: form.email,
                toEmail: "fabianholler2005@gmail.com",
                message: form.message,
            },
            "5JzB6gbK5b327agjG"
        ).then(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert("Sorry, something went wrong while sending your email.")
        })
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                                          outlined-none border-none font-medium"
                        />
                        <span className="text-white font-medium mb-4 mt-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                                          outlined-none border-none font-medium"
                        />
                        <span className="text-white font-medium mb-4 mt-4">Your Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
                                         outlined-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
                                     shadow-primary rounded-xl"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={fadeIn('left', "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")