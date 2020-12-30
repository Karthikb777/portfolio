import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
    return(
        <>
            <motion.div animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="kb-contact">
            <div class="wrapper">
            <h3 class="kb-header-small">CONTACT ME</h3>
            <p class="kb-contact-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam at adipisci sit illo et minus quo numquam eveniet molestias fugiat illum asperiores tempora deleniti, velit ea labore esse cumque?</p>
            <form action="#" method="post">
                <input type="text" name="Name" id="Name" />
                <input type="email" name="email" id="email" />
                <textarea name="Suggestion" id="suggesttion" cols="30" rows="10"></textarea>
                <input type="submit" value="submit" />
            </form>
            </div>
            </motion.div>
        </>
    );
}

export default Contact;
