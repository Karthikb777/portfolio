import { motion } from 'framer-motion';
import React from 'react';


function About() {
    return(
        <>
             {/* <section className="kb-about" id="about"> */}
             <motion.div
             animate={{ opacity: 1 }}
             transition={{ duration: 2 }}
             className="kb-about">
                 <div className="wrapper">
                 <h3 className="kb-header-small">A FEW WORDS ABOUT ME</h3>
                 <h3 className="kb-header-align-center">Creative thinker, well-organized person, problem solver, self-taught developer, independent person with high attention to detail.
                 </h3>
                 <div className="kb-content">
                 {/* <!-- <p>BACKGROUND</p> <br//> --> */}
                     <p>Currently, I'm studying third year of Electronics and communication engineering. But, I've always been interested in computers and software. I learnt C++ in 2016, and it was the start of something beautiful and creative in my life. Since then, I have been coding and have developed many things, solving my problems, and also problems of others.</p> <br/>
                     <p>A little more about me - I'm a minimalist who believes that less is more, and this principle of mine is reflected in my work. I'm also a healthy perfectionist, who strive for flawlessness and high standards in my life.</p> <br/>
                     <p>MY INTERESTS</p> <br/> 
                     <p>I'm interested in mainly in tech and automobiles, I'm also an avid gamer who enjoys gaming. </p> <br/> 
                 {/* <!-- <p>I'm also a spiritual person,  </p> <br/>  --> */}
                 <hr/>
                     <div className="kb-gear">
                         <h3 className="kb-header-small">MY GEAR</h3>
                         <p className="kb-header-clr-blk">It is often said that the character of a person can be seen by the stuff he uses. I greatly value the tools that I use in my life and I honestly think that they have given me an oppurtunity to express myself. I also think that I'm blessed in life to have the things that I have, and without them, I would not be able to achieve the things that I have achieved.</p>
                         <div className="kb-gear-content">
                             {/* <!-- <p>It is often said that the character of a person can be seen by the stuff he uses.</p> --> */}
                             <p>
                                 The laptop that I use is an Asus ROG strix, which is designed for esports and peak Windows 10 gaming performance. I require this amount of performance to satisfy my graphic design and gaming needs. <br/><br/>
                                 I use a Xiaomi Poco F1, which is a developer friendly device, which allows me to tinker with the phone's software and also allows me to test my apps.
                             </p>
                             <br/>
                             <svg class="kb-gear-svg" width="444" height="282" viewBox="0 0 444 282" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                </svg> 
                                 <div className="kb-gear-tools">
                                    <p>Software that I use</p>
                                    <p className="kb-gear-tools-li">VS Code - my main code editor <span className="kb-divider">/</span> Figma - for UI design <span className="kb-divider">/</span> Adobe illustrator - for graphic design</p>
                                 </div>   
                         </div>
                     </div>
                 </div> 
                 </div> 
           </motion.div>
        {/* </section> */}
        </>
        
    );
}




export default About; 