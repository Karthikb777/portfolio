import React, { useState, useEffect } from 'react';
import {
    Link
  } from 'react-router-dom';
import { motion } from 'framer-motion';


function About() {
    // const [position, setPosition] = useState(0);
    // const handleScroll = () => {
    //     const p = window.pageYOffset;
    //     setPosition(p);
    // }

    useEffect(() => {
            window.scrollTo(0, 0)
        }
    );

    return(

        <>
             {/* <section className="kb-about" id="about"> */}
             <motion.div
             initial={{ x: '100vw' }}
             animate={{ x: 0 }}
             transition={{ duration: 0.6 }}
             className="kb-about">
                 <div className="wrapper">
                 <motion.h3
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.1 }}
                 className="kb-header-small">A FEW WORDS ABOUT ME</motion.h3>
                 <motion.h3
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.2 }}
                 className="kb-header-align-center">Creative thinker, well-organized person, problem solver, self-taught developer, independent person with high attention to detail.
                 </motion.h3>
                 <div className="kb-content">
                 {/* <!-- <p>BACKGROUND</p> <br//> --> */}
                     <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.3 }}
                     >Currently, I'm studying third year of Electronics and communication engineering. But, I've always been interested in computers and software. I learnt C++ in 2016, and it was the start of something beautiful and creative in my life. Since then, I have been coding and have developed many things, solving my problems, and also problems of others.</motion.p> <br/>
                     <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.35 }}
                     >A little more about me - I'm a minimalist, and this principle of mine is reflected in my work. I'm also a healthy perfectionist, who strive for flawlessness and high standards in my life.</motion.p> <br/>
                     <motion.p className="kb-interests"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.4 }}
                     >MY INTERESTS</motion.p> <br/> 
                     <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.45 }}
                     >I'm interested in mainly in tech and automobiles, I'm also an avid gamer who enjoys gaming. </motion.p> <br/> 
                 {/* <!-- <p>I'm also a spiritual person,  </p> <br/>  --> */}
                 <motion.hr initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.45 }}/>
                     <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.5 }}
                     className="kb-gear">
                         <h3 className="kb-header-small">MY GEAR</h3>
                         <p className="kb-header-clr-blk">It is often said that the character of a person can be seen by the stuff he uses. I greatly value the tools that I use in my life and I honestly think that they have given me an oppurtunity to express myself. I also think that I'm blessed in life to have the things that I have, and without them, I would not be able to achieve the things that I have achieved.</p>
                         <div className="kb-gear-content">
                             {/* <!-- <p>It is often said that the character of a person can be seen by the stuff he uses.</p> --> */}
                             <p>
                                 The laptop that I use is an Asus ROG strix, which is designed for esports and peak Windows 10 gaming performance. I require this amount of performance to satisfy my graphic design and gaming needs. <br/><br/>
                                 I use a Xiaomi Poco F1, which is a developer friendly device, which allows me to tinker with the phone's software and also allows me to test my apps.
                             </p>
                             <br/>
                             <svg className="kb-gear-svg-mobile" width="287" height="182" viewBox="0 0 287 182" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="laptop-phone 1" clip-path="url(#clip0)">
<path id="Vector" d="M49.5718 165.631L40.1883 168.944C40.0906 168.979 39.987 168.994 39.8834 168.989C39.7798 168.984 39.6782 168.959 39.5844 168.915C39.4906 168.871 39.4065 168.81 39.3369 168.734C39.2672 168.658 39.2134 168.569 39.1785 168.472L0.304096 61.0209C0.269169 60.9243 0.253833 60.822 0.258961 60.7196C0.264089 60.6172 0.289577 60.5168 0.333979 60.4241C0.378381 60.3315 0.44082 60.2484 0.517733 60.1796C0.594647 60.1108 0.68453 60.0576 0.782242 60.0231L169.882 0.299947C169.979 0.265438 170.083 0.250282 170.186 0.255348C170.29 0.260415 170.392 0.285602 170.485 0.329472C170.579 0.373342 170.663 0.435037 170.733 0.511029C170.803 0.587022 170.856 0.675824 170.891 0.772366L209.767 108.224C209.838 108.419 209.827 108.633 209.737 108.82C209.648 109.007 209.486 109.152 209.289 109.222L164.586 125.01" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_2" d="M211.001 111.637L214.42 121.087C214.476 121.241 214.467 121.411 214.396 121.559C214.325 121.707 214.197 121.822 214.041 121.877L44.6319 181.709C44.4757 181.764 44.3036 181.756 44.1536 181.686C44.0037 181.615 43.888 181.489 43.8322 181.335L40.251 171.436C40.1951 171.282 40.2036 171.112 40.2746 170.964C40.3456 170.816 40.4733 170.701 40.6295 170.646L209.585 110.975C209.861 110.877 210.166 110.892 210.431 111.016C210.696 111.14 210.901 111.363 211 111.637L211.001 111.637Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_3" d="M4.31488 72.1077L164.587 125.01" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_4" d="M52.5553 158.165L49.6727 165.595" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_5" d="M212.095 114.709L211.463 112.963L40.8829 173.209L41.5143 174.954L212.095 114.709Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
<path id="Vector_6" d="M213.693 119.146L213.061 117.4L42.4163 177.717L43.0485 179.463L213.693 119.146Z" stroke="black" stroke-width="1.5007" stroke-miterlimit="10"/>
<path id="rog" fill-rule="evenodd" clip-rule="evenodd" d="M151.91 48.2343C151.851 48.276 151.844 48.3106 151.798 48.387C151.761 48.4483 151.728 48.4946 151.692 48.5546C151.61 48.6917 151.563 48.7754 151.49 48.894C151.128 49.4834 150.666 50.3657 150.328 50.9887C149.803 51.9554 149.345 52.8697 148.85 53.8215C147.917 55.6165 146.891 57.7392 145.941 59.4875C145.154 60.9327 144.495 62.2141 143.656 63.6777C143.336 64.2374 143.174 64.7004 142.55 64.9441C141.52 65.3463 139.841 64.9858 138.999 64.8494C138.264 64.7304 136.302 64.3915 135.506 64.6439L136.356 65.1952C136.984 65.6493 138.149 66.7104 138.712 67.2283C140.644 69.0076 143.014 70.7485 145.528 71.5755C146.176 71.7965 146.84 71.9704 147.514 72.0958C147.852 72.1583 148.186 72.1919 148.56 72.2504C148.924 72.2948 149.29 72.3137 149.656 72.3069C149.379 72.1828 149.08 72.0172 148.844 71.8887C147.794 71.3142 145.541 70.2712 144.741 69.6156C144.068 69.0651 143.817 68.6713 144.029 67.8053C144.272 66.8157 145.156 65.3849 145.705 64.4727C147.042 62.2558 148.245 60.2496 149.698 58.0806C150.386 57.0526 151.107 55.9973 151.869 54.9515C152.616 53.9263 153.379 52.9237 154.178 51.9051L155.398 50.4041C155.514 50.2736 156.646 48.9619 156.66 48.9268L157.788 47.7014C158.165 47.2839 158.543 46.9127 158.946 46.4833C160.548 44.8396 162.246 43.2904 164.032 41.8438C164.509 41.4691 164.964 41.1137 165.448 40.7405L166.917 39.6669C166.76 39.6486 164.934 40.2731 164.599 40.3914C163.25 40.8679 162.437 41.1961 161.182 41.7481C159.967 42.2758 158.783 42.8723 157.637 43.5348C157.489 43.6292 157.304 43.7129 157.156 43.8106C156.873 43.9986 156.538 44.1779 156.246 44.3659C155.646 44.7536 155.113 45.1408 154.561 45.5341C153.991 45.9389 153.494 46.3558 153.007 46.7794C152.719 47.0297 151.938 48.0346 151.913 48.2331L151.91 48.2343ZM166.214 46.6883L167.201 45.6822C167.548 45.3466 167.899 44.978 168.224 44.6575C168.884 44.0072 168.908 42.6477 168.618 41.8825C168.354 42.0734 168.103 42.2815 167.867 42.5055C167.774 42.5803 167.687 42.6469 167.603 42.7225C166.999 43.259 166.178 43.9314 165.617 44.47C165.454 44.6262 165.292 44.7651 165.124 44.9154C164.951 45.0506 164.795 45.2063 164.66 45.3789C164.444 45.4438 160.852 49.0222 160.408 49.4794C159.776 50.1301 158.974 50.9264 158.377 51.5797C158.306 51.656 156.464 53.5894 156.414 53.7314C156.274 53.8077 155.046 55.2278 154.848 55.4476C152.386 58.1717 149.75 61.4364 147.509 64.3638C146.886 65.1779 146.097 66.2349 145.492 67.1113L145.005 67.8104C144.938 67.8806 144.888 67.9651 144.86 68.0574C145.238 68.194 147.446 68.2709 147.965 68.2665C150.797 68.2534 153.622 67.9937 156.408 67.4904L158.228 67.1322L159.631 66.7658L158.488 67.0642C158.708 67.0134 158.93 66.9709 159.143 66.9169C159.458 66.8373 159.768 66.7541 160.092 66.6735C160.704 66.5208 161.404 66.3173 162.015 66.1138C162.774 65.8594 163.203 65.7498 163.732 65.2817C164.112 64.9407 164.446 64.5527 164.726 64.1272C165.771 62.5871 166.447 60.5168 166.924 58.6909C167.417 56.7334 167.761 54.7422 167.954 52.7339C168.057 51.7193 168.121 50.6763 168.157 49.6244C168.174 49.0914 168.173 48.5828 168.163 48.0275C168.157 47.7202 168.134 46.5983 168.079 46.3652C167.71 46.5525 162.196 52.4324 161.671 52.9901C160.958 53.7467 160.29 54.5088 159.6 55.2479C158.931 55.9661 158.241 56.7789 157.578 57.5034C156.231 58.9756 154.909 60.5526 153.577 62.0597C153.348 62.3179 151.657 64.2475 151.611 64.3582C151.745 64.2859 157.469 59.1606 157.608 59.0389C157.88 58.8021 163.5 53.7729 163.608 53.7291C163.622 53.8879 163.477 54.7594 163.451 55.0095C163.408 55.4262 163.348 55.9047 163.288 56.325C162.951 58.7082 162.668 61.5262 160.667 63.2365L160.557 63.3658C160.364 63.4836 160.18 63.6142 160.005 63.7565C159.801 63.8954 159.597 64.0135 159.387 64.1381C158.392 64.7253 156.735 65.1878 155.558 65.4155C154.217 65.675 153.25 65.7765 151.913 65.9278C151.594 65.964 149.261 66.1451 149.109 66.1113C149.137 65.9713 150.085 64.798 150.165 64.6897C151.955 62.2983 155.036 58.6222 157.08 56.3436C157.296 56.1024 157.499 55.8813 157.696 55.6597C157.86 55.4758 158.167 55.1571 158.291 54.9841L159.256 53.941C159.581 53.5861 159.884 53.2712 160.224 52.8906C160.868 52.1717 161.547 51.5191 162.183 50.817C162.276 50.7137 165.963 46.8659 166.215 46.6886L166.214 46.6883ZM139.86 69.2839C139.779 69.2055 138.668 68.6698 138.444 68.5548C137.023 67.8247 135.661 67.1584 134.215 66.3751C133.208 65.8291 132.301 65.3186 131.434 64.8278C131.072 64.6225 129.063 63.4393 128.725 63.1727C128.722 63.249 129.572 64.4991 129.69 64.6614C129.87 64.9105 130.024 65.1415 130.207 65.3956C132.004 67.8799 133.178 68.6453 136.404 69.0135C136.802 69.0587 139.668 69.3243 139.859 69.2839H139.86Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
<path id="Vector_7" d="M8.40887 65.7542L117.831 101.872" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_8" d="M69.6473 78.5979L179.07 114.716" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_9" d="M48.6714 62.9966L158.094 99.1145" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_10" d="M24.1553 63.0828L55.413 73.4002" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_11" d="M138.115 108.567L164.734 117.353" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_12" d="M52.5605 158.083L155.381 121.769L52.5605 158.083Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_13" d="M12.5611 82.2683L36.988 149.784L12.5611 82.2683Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_14" d="M22.3468 92.7637L39.6835 140.682L22.3468 92.7637Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_15" d="M25.436 83.1108L41.1957 126.671L25.436 83.1108Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_16" d="M39.3474 104.523L54.7527 147.104L39.3474 104.523Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_17" d="M51.3389 154.847L44.9441 137.172L51.3389 154.847Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_18" d="M43.68 93.8342L61.4137 142.85L43.68 93.8342Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_19" d="M51.7803 101.102L64.3666 135.89L51.7803 101.102Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_20" d="M55.1175 93.7073L66.5589 125.331L55.1175 93.7073Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_21" d="M66.2422 108.89L77.4263 139.803L66.2422 108.89Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_22" d="M73.9141 145.79L69.2716 132.958L73.9141 145.79Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_23" d="M73.615 105.649L85.7319 139.14L73.615 105.649Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_24" d="M79.6332 110.444L88.2329 134.213L79.6332 110.444Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_25" d="M83.2722 107.49L90.2624 126.811L83.2722 107.49Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_26" d="M90.5442 115.402L98.1859 136.524L90.5442 115.402Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_27" d="M95.2841 140.791L92.112 132.023L95.2841 140.791Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
<path id="Vector_28" d="M284.484 14.752L255.359 3.81992C253.552 3.14152 251.53 4.03917 250.843 5.8249L224.586 74.1124C223.899 75.8982 224.808 77.8958 226.615 78.5742L255.74 89.5062C257.547 90.1846 259.569 89.2869 260.256 87.5012L286.513 19.2137C287.2 17.4279 286.291 15.4304 284.484 14.752Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
<path id="Vector_29" d="M269.026 19.5893C269.65 17.9681 268.825 16.1546 267.184 15.5387C265.543 14.9229 263.708 15.7378 263.084 17.359L258.952 28.1049C258.329 29.7261 259.154 31.5396 260.795 32.1554C262.436 32.7713 264.271 31.9564 264.894 30.3352L269.026 19.5893Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_30" d="M268.703 19.4315C269.256 17.9933 268.524 16.3845 267.069 15.8381C265.613 15.2918 263.985 16.0148 263.432 17.453L261.463 22.5741C260.91 24.0123 261.642 25.6211 263.097 26.1675C264.553 26.7138 266.181 25.9908 266.734 24.5526L268.703 19.4315Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_31" d="M266.911 16.1785L266.911 16.1784C265.68 15.7165 264.304 16.3277 263.836 17.5435L263.745 17.7813C263.277 18.9972 263.896 20.3572 265.126 20.8191L265.126 20.8192C266.357 21.2811 267.734 20.6699 268.201 19.4541L268.293 19.2163C268.76 18.0004 268.141 16.6404 266.911 16.1785Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_32" d="M262.905 26.6668L262.905 26.6667C261.529 26.1502 259.99 26.8337 259.467 28.1933L259.365 28.4592C258.842 29.8189 259.534 31.3398 260.91 31.8564L260.91 31.8564C262.286 32.373 263.826 31.6895 264.348 30.3298L264.451 30.064C264.973 28.7043 264.282 27.1834 262.905 26.6668Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_33" d="M264.992 21.1685L264.992 21.1684C263.761 20.7065 262.385 21.3177 261.917 22.5335L261.826 22.7713C261.358 23.9871 261.977 25.3472 263.207 25.8091L263.208 25.8092C264.438 26.2711 265.815 25.6599 266.282 24.4441L266.374 24.2063C266.841 22.9904 266.223 21.6304 264.992 21.1685Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_34" d="M271.778 20.8466C271.924 20.4674 271.731 20.0432 271.347 19.8992C270.963 19.7552 270.534 19.9458 270.388 20.325L269.516 22.5945C269.37 22.9737 269.563 23.3978 269.946 23.5419C270.33 23.6859 270.759 23.4952 270.905 23.1161L271.778 20.8466Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_35" d="M267.73 19.039C268.082 18.1238 267.616 17.1 266.69 16.7523C265.764 16.4047 264.728 16.8647 264.376 17.7799L264.307 17.9587C263.955 18.8739 264.421 19.8977 265.347 20.2454C266.273 20.5931 267.309 20.133 267.661 19.2178L267.73 19.039Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_36" d="M265.826 24.0629C266.178 23.1477 265.712 22.124 264.786 21.7763C263.86 21.4286 262.823 21.8886 262.471 22.8038L262.403 22.9827C262.051 23.8979 262.516 24.9216 263.443 25.2693C264.369 25.617 265.405 25.157 265.757 24.2418L265.826 24.0629Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_37" d="M266.908 18.7528C267.084 18.2952 266.851 17.7833 266.388 17.6094C265.925 17.4356 265.407 17.6656 265.231 18.1232L265.196 18.2127C265.02 18.6702 265.253 19.1821 265.716 19.356C266.179 19.5298 266.698 19.2998 266.874 18.8422L266.908 18.7528Z" stroke="black" stroke-miterlimit="10"/>
<path id="Vector_38" d="M264.956 23.7589C265.132 23.3013 264.899 22.7894 264.436 22.6156C263.973 22.4417 263.454 22.6717 263.278 23.1293L263.244 23.2188C263.068 23.6764 263.301 24.1882 263.764 24.3621C264.227 24.5359 264.745 24.3059 264.921 23.8483L264.956 23.7589Z" stroke="black" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="287" height="182" fill="white"/>
</clipPath>
</defs>
</svg>

                             {/* <svg class="kb-gear-svg" width="444" height="282" viewBox="0 0 444 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="laptop-phone 1" clip-path="url(#clip0)">
                                <path id="Vector" d="M76.6894 256.637L62.1728 261.771C62.0217 261.825 61.8614 261.848 61.7011 261.84C61.5408 261.833 61.3836 261.794 61.2386 261.726C61.0935 261.658 60.9634 261.562 60.8556 261.444C60.7478 261.327 60.6646 261.189 60.6106 261.04L0.470428 94.549C0.416394 94.3994 0.39267 94.2407 0.400602 94.0821C0.408535 93.9235 0.447967 93.7679 0.516658 93.6243C0.58535 93.4808 0.681945 93.352 0.800933 93.2454C0.919922 93.1388 1.05897 93.0564 1.21014 93.003L262.813 0.464868C262.964 0.411398 263.125 0.387915 263.285 0.395765C263.445 0.403615 263.602 0.442641 263.748 0.510616C263.893 0.57859 264.023 0.674183 264.131 0.79193C264.238 0.909677 264.321 1.04727 264.375 1.19686L324.518 167.688C324.627 167.99 324.61 168.322 324.471 168.612C324.333 168.902 324.083 169.125 323.778 169.233L254.621 193.696" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_2" d="M326.426 172.975L331.716 187.618C331.802 187.857 331.789 188.121 331.679 188.35C331.569 188.58 331.372 188.757 331.13 188.842L69.0473 281.549C68.8056 281.635 68.5394 281.622 68.3074 281.513C68.0753 281.404 67.8965 281.209 67.8101 280.969L62.2698 265.632C62.1834 265.393 62.1965 265.13 62.3064 264.9C62.4162 264.671 62.6137 264.494 62.8555 264.408L324.236 171.95C324.663 171.799 325.134 171.822 325.545 172.014C325.956 172.206 326.272 172.552 326.425 172.975L326.426 172.975Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_3" d="M6.67535 111.727L254.622 193.696" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_4" d="M81.305 245.068L76.8456 256.582" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_5" d="M328.119 177.736L327.142 175.031L63.2474 268.379L64.2243 271.084L328.119 177.736Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path id="Vector_6" d="M330.591 184.611L329.613 181.905L65.6196 275.363L66.5977 278.069L330.591 184.611Z" stroke="black" stroke-width="1.5007" stroke-miterlimit="10"/>
                                <path id="rog" fill-rule="evenodd" clip-rule="evenodd" d="M235.011 74.7366C234.92 74.8012 234.909 74.8549 234.838 74.9731C234.78 75.0681 234.729 75.1398 234.673 75.2329C234.546 75.4453 234.474 75.575 234.36 75.7587C233.8 76.672 233.086 78.039 232.563 79.0044C231.751 80.5023 231.043 81.919 230.277 83.3936C228.833 86.1749 227.246 89.464 225.776 92.1728C224.559 94.4121 223.54 96.3976 222.242 98.6653C221.746 99.5325 221.496 100.25 220.531 100.628C218.938 101.251 216.339 100.692 215.037 100.481C213.899 100.296 210.864 99.7714 209.633 100.162L210.947 101.017C211.92 101.72 213.723 103.364 214.593 104.167C217.582 106.924 221.248 109.621 225.137 110.903C226.14 111.245 227.167 111.514 228.21 111.709C228.733 111.806 229.25 111.858 229.829 111.948C230.391 112.017 230.957 112.046 231.523 112.036C231.094 111.844 230.632 111.587 230.268 111.388C228.642 110.498 225.157 108.882 223.919 107.866C222.879 107.013 222.491 106.403 222.819 105.061C223.195 103.528 224.561 101.311 225.411 99.8971C227.479 96.4622 229.341 93.3537 231.588 89.9929C232.654 88.4001 233.768 86.765 234.948 85.1445C236.103 83.556 237.283 82.0025 238.519 80.4242L240.407 78.0986C240.587 77.8963 242.337 75.8639 242.359 75.8096L244.104 73.9108C244.687 73.2639 245.272 72.6888 245.896 72.0235C248.374 69.4766 251.001 67.0763 253.763 64.8348C254.502 64.2542 255.206 63.7035 255.954 63.1252L258.227 61.4618C257.984 61.4334 255.16 62.4011 254.642 62.5844C252.554 63.3227 251.296 63.8312 249.355 64.6866C247.475 65.5041 245.644 66.4284 243.871 67.4549C243.642 67.6012 243.355 67.7308 243.127 67.8822C242.688 68.1735 242.171 68.4514 241.719 68.7427C240.791 69.3434 239.966 69.9434 239.111 70.5528C238.23 71.1799 237.461 71.826 236.707 72.4823C236.262 72.8702 235.055 74.4272 235.016 74.7346L235.011 74.7366ZM257.139 72.3412L258.666 70.7822C259.203 70.2623 259.746 69.6911 260.249 69.1944C261.27 68.1869 261.307 66.0804 260.859 64.8947C260.45 65.1905 260.062 65.513 259.697 65.8601C259.554 65.9759 259.419 66.0792 259.288 66.1963C258.354 67.0276 257.083 68.0694 256.215 68.9039C255.963 69.1459 255.712 69.3612 255.453 69.5941C255.185 69.8036 254.944 70.0448 254.736 70.3123C254.401 70.4128 248.844 75.9574 248.158 76.6657C247.18 77.674 245.938 78.9078 245.015 79.9201C244.905 80.0383 242.056 83.0341 241.979 83.254C241.762 83.3723 239.862 85.5726 239.556 85.9132C235.748 90.1341 231.668 95.1926 228.203 99.7284C227.239 100.99 226.018 102.628 225.082 103.986L224.328 105.069C224.225 105.178 224.148 105.309 224.104 105.452C224.689 105.663 228.105 105.782 228.908 105.776C233.289 105.755 237.66 105.353 241.969 104.573L244.785 104.018L246.955 103.45L245.188 103.913C245.528 103.834 245.871 103.768 246.2 103.684C246.687 103.561 247.167 103.432 247.669 103.307C248.615 103.071 249.698 102.755 250.643 102.44C251.818 102.046 252.482 101.876 253.3 101.151C253.888 100.622 254.405 100.021 254.838 99.3618C256.454 96.9754 257.5 93.7676 258.238 90.9386C259.001 87.9055 259.533 84.8202 259.831 81.7085C259.99 80.1365 260.09 78.5203 260.145 76.8904C260.172 76.0646 260.17 75.2766 260.154 74.4161C260.145 73.94 260.11 72.2016 260.025 71.8406C259.454 72.1307 250.923 81.2414 250.111 82.1054C249.008 83.2777 247.974 84.4587 246.908 85.6038C245.872 86.7165 244.805 87.9759 243.779 89.0985C241.695 91.3797 239.65 93.8232 237.589 96.1583C237.236 96.5584 234.619 99.5483 234.548 99.7197C234.756 99.6078 243.61 91.6662 243.826 91.4778C244.246 91.1108 252.941 83.3183 253.107 83.2505C253.13 83.4965 252.905 84.8469 252.866 85.2344C252.799 85.8801 252.706 86.6215 252.613 87.2727C252.091 90.9654 251.654 95.3317 248.558 97.9818L248.387 98.182C248.089 98.3646 247.804 98.5669 247.534 98.7875C247.218 99.0027 246.903 99.1856 246.578 99.3788C245.039 100.289 242.475 101.005 240.655 101.358C238.58 101.76 237.083 101.917 235.016 102.152C234.523 102.208 230.913 102.488 230.678 102.436C230.721 102.219 232.187 100.401 232.311 100.233C235.08 96.528 239.847 90.8322 243.009 87.3015C243.344 86.9278 243.656 86.5853 243.962 86.2419C244.216 85.9569 244.691 85.463 244.882 85.195L246.375 83.5788C246.878 83.029 247.347 82.541 247.873 81.9513C248.869 80.8373 249.92 79.8263 250.903 78.7383C251.048 78.5783 256.752 72.6163 257.142 72.3416L257.139 72.3412ZM216.369 107.352C216.244 107.23 214.525 106.4 214.178 106.222C211.98 105.091 209.873 104.058 207.636 102.845C206.077 101.999 204.675 101.208 203.334 100.447C202.773 100.129 199.666 98.296 199.143 97.8829C199.137 98.0011 200.453 99.9381 200.635 100.19C200.914 100.575 201.153 100.933 201.435 101.327C204.215 105.176 206.032 106.362 211.023 106.933C211.638 107.003 216.071 107.415 216.367 107.352H216.369Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
                                <path id="Vector_7" d="M13.0089 101.883L182.289 157.846" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_8" d="M107.747 121.783L277.028 177.746" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_9" d="M75.2964 97.6101L244.577 153.573" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_10" d="M37.3692 97.7437L85.7261 113.73" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_11" d="M213.67 168.219L254.85 181.833" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_12" d="M81.3131 244.942L240.381 188.675L81.3131 244.942Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_13" d="M19.4325 127.471L57.2219 232.084L19.4325 127.471Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_14" d="M34.5714 143.733L61.3919 217.98L34.5714 143.733Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_15" d="M39.3505 128.776L63.7313 196.27L39.3505 128.776Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_16" d="M60.8719 161.954L84.7045 227.93L60.8719 161.954Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_17" d="M79.4233 239.928L69.5302 212.541L79.4233 239.928Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_18" d="M67.5747 145.391L95.0094 221.339L67.5747 145.391Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_19" d="M80.1062 156.652L99.5776 210.555L80.1062 156.652Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_20" d="M85.2689 145.195L102.969 194.194L85.2689 145.195Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_21" d="M102.479 168.72L119.781 216.618L102.479 168.72Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_22" d="M114.348 225.895L107.166 206.012L114.348 225.895Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_23" d="M113.885 163.698L132.63 215.591L113.885 163.698Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_24" d="M123.196 171.127L136.5 207.957L123.196 171.127Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_25" d="M128.825 166.551L139.639 196.487L128.825 166.551Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_26" d="M140.075 178.81L151.897 211.536L140.075 178.81Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_27" d="M147.408 218.149L142.501 204.564L147.408 218.149Z" stroke="black" stroke-width="0.25" stroke-miterlimit="10"/>
                                <path id="Vector_28" d="M440.107 22.8573L395.05 5.91868C392.254 4.86752 389.126 6.25839 388.064 9.0253L347.443 114.833C346.381 117.6 347.787 120.696 350.583 121.747L395.639 138.685C398.436 139.736 401.563 138.346 402.626 135.579L443.246 29.7705C444.309 27.0036 442.903 23.9085 440.107 22.8573Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                                <path id="Vector_29" d="M416.194 30.3524C417.158 27.8405 415.882 25.0306 413.344 24.0763C410.805 23.122 407.966 24.3847 407.002 26.8966L400.609 43.5469C399.645 46.0588 400.921 48.8687 403.459 49.823C405.998 50.7773 408.837 49.5146 409.802 47.0027L416.194 30.3524Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_30" d="M415.694 30.1083C416.549 27.8799 415.417 25.3872 413.166 24.5406C410.914 23.6941 408.395 24.8143 407.539 27.0427L404.493 34.9777C403.638 37.2061 404.769 39.6988 407.021 40.5454C409.273 41.3919 411.792 40.2717 412.648 38.0433L415.694 30.1083Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_31" d="M412.921 25.0677L412.921 25.0676C411.017 24.3519 408.888 25.2989 408.164 27.1828L408.023 27.5513C407.3 29.4352 408.257 31.5425 410.16 32.2582L410.161 32.2584C412.065 32.974 414.194 32.027 414.917 30.1432L415.059 29.7747C415.782 27.8908 414.825 25.7834 412.921 25.0677Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_32" d="M406.725 41.3189L406.725 41.3188C404.596 40.5184 402.214 41.5775 401.405 43.6842L401.247 44.0962C400.438 46.2029 401.509 48.5595 403.637 49.3599L403.638 49.36C405.767 50.1604 408.148 49.1013 408.957 46.9946L409.115 46.5827C409.924 44.4759 408.854 42.1193 406.725 41.3189Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_33" d="M409.953 32.7994L409.953 32.7993C408.049 32.0836 405.919 33.0306 405.196 34.9145L405.054 35.283C404.331 37.1668 405.288 39.2742 407.192 39.9899L407.192 39.99C409.096 40.7057 411.226 39.7587 411.949 37.8749L412.09 37.5064C412.814 35.6225 411.857 33.5151 409.953 32.7994Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_34" d="M420.451 32.3009C420.676 31.7134 420.378 31.0562 419.784 30.833C419.191 30.6099 418.527 30.9053 418.301 31.4928L416.951 35.0092C416.725 35.5968 417.024 36.254 417.617 36.4771C418.211 36.7003 418.875 36.4049 419.101 35.8174L420.451 32.3009Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_35" d="M414.189 29.4997C414.733 28.0816 414.013 26.4954 412.58 25.9566C411.147 25.4179 409.544 26.1308 408.999 27.5488L408.893 27.8259C408.348 29.244 409.069 30.8302 410.502 31.369C411.935 31.9077 413.538 31.1949 414.082 29.7768L414.189 29.4997Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_36" d="M411.243 37.2841C411.787 35.8661 411.067 34.2798 409.634 33.7411C408.201 33.2023 406.598 33.9152 406.053 35.3332L405.947 35.6103C405.403 37.0284 406.123 38.6147 407.556 39.1534C408.989 39.6921 410.592 38.9793 411.136 37.5612L411.243 37.2841Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_37" d="M412.917 29.0566C413.189 28.3476 412.829 27.5544 412.112 27.2851C411.396 27.0157 410.594 27.3721 410.322 28.0812L410.269 28.2197C409.997 28.9287 410.357 29.7219 411.073 29.9912C411.79 30.2606 412.591 29.9042 412.864 29.1952L412.917 29.0566Z" stroke="black" stroke-miterlimit="10"/>
                                <path id="Vector_38" d="M409.897 36.8132C410.169 36.1042 409.809 35.311 409.092 35.0417C408.376 34.7723 407.574 35.1287 407.302 35.8378L407.249 35.9763C406.976 36.6853 407.337 37.4785 408.053 37.7478C408.77 38.0172 409.571 37.6608 409.843 36.9518L409.897 36.8132Z" stroke="black" stroke-miterlimit="10"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="444" height="282" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>  */}
                                 <div className="kb-gear-tools">
                                    <p>Software that I use</p>
                                    <p className="kb-gear-tools-li">VS Code - my main code editor <span className="kb-divider">/</span> Figma - for UI design <span className="kb-divider">/</span> Adobe illustrator - for graphic design</p>
                                 </div>  
 
                         </div>
                     </motion.div>
                     <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1.6 }}
                     className="kb-about-sp"><Link className='kb-link kb-nxtpg' to='/skills-projects'>View Skills & projects {'>'} </Link></motion.div>

                 </div> 
                 </div> 
           </motion.div>
        {/* </section> */}
        </>
        
    );
}




export default About; 