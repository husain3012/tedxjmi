import React from 'react'
const Footer = () =>{
    return(
        <div class="w-full font-Cinzel ">
            <div class="h-screen pt-12 pb-24 w-full flex-col text-white flex items-center justify-around" style={{backgroundColor: '#1B1B1B'}}>
                <div class="text-2xl md:text-3xl ">Jamia Millia Islamia, New Delhi</div>
                <div class="flex flex-col  items-center">
                <div class="text-xs">
                    TEDxJMI 2021 Official Website
                </div>
                <div class="text-xs">
                    Operating under license from TED™
                </div>

                </div>
            </div>
            <div class="w-full bg-black text-white p-4 flex justify-center items-center gap-2">
                <div>
                Made 
                </div>
                <div>
                With
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill='white' height="20" viewBox="0 0 20 20">  
                    <path d="M14.75 1A5.24 5.24 0 0 0 10 4 5.24 5.24 0 0 0 0 6.25C0 11.75 10 19 10 19s10-7.25 10-12.75A5.25 5.25 0 0 0 14.75 1z"/>
                </svg> 
                </div>
                <div>
                By
                </div> 
                <div>
                <svg height="40" viewBox="0 0 327 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="17" width="327" height="89" fill="black"/>
                    <circle cx="69" cy="43" r="3" fill="white"/>
                    <circle cx="78" cy="70" r="9" fill="white"/>
                    <circle cx="25.5" cy="53.5" r="5.5" fill="white"/>
                    <circle cx="43.5" cy="78.5" r="6.5" fill="white"/>
                    <circle cx="48" cy="34" r="7" fill="white"/>
                    <line x1="24.6732" y1="52.6216" x2="46.6732" y2="33.6216" stroke="white"/>
                    <line x1="48.3841" y1="33.6799" x2="78.3841" y2="69.6799" stroke="white"/>
                    <line x1="42.5986" y1="77.7018" x2="68.5986" y2="42.7018" stroke="white"/>
                    <line x1="25.4111" y1="52.7154" x2="43.4111" y2="78.7154" stroke="white"/>
                    <path d="M114.944 83.32C112.299 83.32 110.187 82.36 108.608 80.44C107.029 78.52 106.24 76.0027 106.24 72.888C106.24 69.4747 107.029 66.2533 108.608 63.224C110.187 60.152 112.277 57.6987 114.88 55.864C117.525 53.9867 120.32 53.048 123.264 53.048C124.203 53.048 124.821 53.24 125.12 53.624C125.461 53.9653 125.739 54.6053 125.952 55.544C126.848 55.3733 127.787 55.288 128.768 55.288C130.859 55.288 131.904 56.0347 131.904 57.528C131.904 58.424 131.584 60.5573 130.944 63.928C129.963 68.8347 129.472 72.248 129.472 74.168C129.472 74.808 129.621 75.32 129.92 75.704C130.261 76.088 130.688 76.28 131.2 76.28C132.011 76.28 132.992 75.768 134.144 74.744C135.296 73.6773 136.853 71.9707 138.816 69.624C139.328 69.0267 139.904 68.728 140.544 68.728C141.099 68.728 141.525 68.984 141.824 69.496C142.165 70.008 142.336 70.712 142.336 71.608C142.336 73.3147 141.931 74.6373 141.12 75.576C139.371 77.752 137.515 79.5867 135.552 81.08C133.589 82.5733 131.691 83.32 129.856 83.32C128.448 83.32 127.147 82.8507 125.952 81.912C124.8 80.9307 123.925 79.608 123.328 77.944C121.109 81.528 118.315 83.32 114.944 83.32ZM117.248 76.856C118.187 76.856 119.083 76.3013 119.936 75.192C120.789 74.0827 121.408 72.6107 121.792 70.776L124.16 59C122.368 59.0427 120.704 59.7253 119.168 61.048C117.675 62.328 116.48 64.0347 115.584 66.168C114.688 68.3013 114.24 70.5627 114.24 72.952C114.24 74.2747 114.496 75.256 115.008 75.896C115.563 76.536 116.309 76.856 117.248 76.856ZM162.046 65.08C163.24 65.08 163.838 65.976 163.838 67.768C163.838 71.1387 161.192 72.824 155.902 72.824C154.878 72.824 153.406 72.632 151.486 72.248C152.04 74.8933 152.488 77.8373 152.83 81.08C153.214 84.28 153.406 86.9253 153.406 89.016C153.406 93.624 152.659 97.144 151.166 99.576C149.672 102.008 147.71 103.224 145.278 103.224C142.206 103.224 140.008 101.048 138.686 96.696C137.406 92.344 136.766 85.7733 136.766 76.984C136.766 68.792 137.64 60.4933 139.39 52.088C141.182 43.64 143.614 36.664 146.686 31.16C149.8 25.6133 153.214 22.84 156.926 22.84C158.931 22.84 160.488 23.736 161.598 25.528C162.75 27.32 163.326 29.7307 163.326 32.76C163.326 42.7867 157.331 53.7093 145.342 65.528C144.915 69.7093 144.702 73.3787 144.702 76.536C144.702 80.9307 144.851 85.432 145.15 90.04C145.448 94.6907 145.939 97.016 146.622 97.016C147.902 97.016 148.542 94.7973 148.542 90.36C148.542 87.032 148.307 83.8107 147.838 80.696C147.411 77.5813 146.814 74.296 146.046 70.84C146.003 70.2853 146.174 69.5813 146.558 68.728C146.984 67.8747 147.496 67.128 148.094 66.488C148.691 65.848 149.224 65.528 149.694 65.528C150.547 65.528 151.571 65.5707 152.766 65.656C153.15 65.6987 153.598 65.72 154.11 65.72C155.816 65.72 157.715 65.5707 159.806 65.272C160.147 65.2293 160.51 65.1867 160.894 65.144C161.278 65.1013 161.662 65.08 162.046 65.08ZM155.582 29.176C154.814 29.176 153.854 30.4773 152.702 33.08C151.592 35.6827 150.483 39.1387 149.374 43.448C148.264 47.7147 147.304 52.2373 146.494 57.016C149.907 53.1333 152.531 49.1013 154.366 44.92C156.2 40.696 157.139 36.7493 157.182 33.08C157.182 30.4773 156.648 29.176 155.582 29.176ZM163.554 83.32C161.932 83.32 160.78 82.4667 160.098 80.76C159.458 79.0533 159.138 76.3227 159.138 72.568C159.138 67.0213 159.927 61.752 161.506 56.76C161.89 55.5227 162.508 54.6267 163.362 54.072C164.258 53.4747 165.495 53.176 167.074 53.176C167.927 53.176 168.524 53.2827 168.866 53.496C169.207 53.7093 169.378 54.1147 169.378 54.712C169.378 55.3947 169.058 56.9307 168.418 59.32C167.991 61.0267 167.65 62.52 167.394 63.8C167.138 65.08 166.924 66.6587 166.754 68.536C168.162 64.8667 169.74 61.88 171.49 59.576C173.239 57.272 174.946 55.6293 176.61 54.648C178.316 53.6667 179.874 53.176 181.282 53.176C184.055 53.176 185.442 54.5627 185.442 57.336C185.442 59 184.972 62.008 184.034 66.36C183.223 70.072 182.818 72.5253 182.818 73.72C182.818 75.4267 183.436 76.28 184.674 76.28C185.527 76.28 186.53 75.768 187.682 74.744C188.876 73.6773 190.455 71.9707 192.418 69.624C192.93 69.0267 193.506 68.728 194.146 68.728C194.7 68.728 195.127 68.984 195.426 69.496C195.767 70.008 195.938 70.712 195.938 71.608C195.938 73.3147 195.532 74.6373 194.722 75.576C192.887 77.8373 190.903 79.6933 188.77 81.144C186.679 82.5947 184.29 83.32 181.602 83.32C179.426 83.32 177.783 82.7013 176.674 81.464C175.564 80.184 175.01 78.3493 175.01 75.96C175.01 74.7653 175.308 72.632 175.906 69.56C176.46 66.872 176.738 65.016 176.738 63.992C176.738 63.3093 176.503 62.968 176.034 62.968C175.479 62.968 174.69 63.6933 173.666 65.144C172.684 66.552 171.66 68.4293 170.594 70.776C169.57 73.1227 168.738 75.5973 168.098 78.2C167.628 80.2053 167.074 81.5707 166.434 82.296C165.836 82.9787 164.876 83.32 163.554 83.32ZM198.632 83.32C195.986 83.32 193.874 82.36 192.296 80.44C190.717 78.52 189.928 76.0027 189.928 72.888C189.928 69.4747 190.717 66.2533 192.296 63.224C193.874 60.152 195.965 57.6987 198.568 55.864C201.213 53.9867 204.008 53.048 206.952 53.048C207.89 53.048 208.509 53.24 208.808 53.624C209.149 53.9653 209.426 54.6053 209.64 55.544C210.536 55.3733 211.474 55.288 212.456 55.288C214.546 55.288 215.592 56.0347 215.592 57.528C215.592 58.424 215.272 60.5573 214.632 63.928C213.65 68.8347 213.16 72.248 213.16 74.168C213.16 74.808 213.309 75.32 213.608 75.704C213.949 76.088 214.376 76.28 214.888 76.28C215.698 76.28 216.68 75.768 217.832 74.744C218.984 73.6773 220.541 71.9707 222.504 69.624C223.016 69.0267 223.592 68.728 224.232 68.728C224.786 68.728 225.213 68.984 225.512 69.496C225.853 70.008 226.024 70.712 226.024 71.608C226.024 73.3147 225.618 74.6373 224.808 75.576C223.058 77.752 221.202 79.5867 219.24 81.08C217.277 82.5733 215.378 83.32 213.544 83.32C212.136 83.32 210.834 82.8507 209.64 81.912C208.488 80.9307 207.613 79.608 207.016 77.944C204.797 81.528 202.002 83.32 198.632 83.32ZM200.936 76.856C201.874 76.856 202.77 76.3013 203.624 75.192C204.477 74.0827 205.096 72.6107 205.48 70.776L207.848 59C206.056 59.0427 204.392 59.7253 202.856 61.048C201.362 62.328 200.168 64.0347 199.272 66.168C198.376 68.3013 197.928 70.5627 197.928 72.952C197.928 74.2747 198.184 75.256 198.696 75.896C199.25 76.536 199.997 76.856 200.936 76.856ZM225.366 83.32C223.745 83.32 222.593 82.4667 221.91 80.76C221.27 79.0533 220.95 76.3227 220.95 72.568C220.95 67.0213 221.739 61.752 223.318 56.76C223.702 55.5227 224.321 54.6267 225.174 54.072C226.07 53.4747 227.307 53.176 228.886 53.176C229.739 53.176 230.337 53.2827 230.678 53.496C231.019 53.7093 231.19 54.1147 231.19 54.712C231.19 55.3947 230.87 56.9307 230.23 59.32C229.803 61.0267 229.462 62.52 229.206 63.8C228.95 65.0373 228.737 66.5947 228.566 68.472C229.718 65.144 231.083 62.328 232.662 60.024C234.283 57.72 235.926 56.0133 237.59 54.904C239.297 53.752 240.897 53.176 242.39 53.176C243.883 53.176 244.929 53.5173 245.526 54.2C246.166 54.8827 246.486 55.928 246.486 57.336C246.486 58.7013 246.081 61.176 245.27 64.76C244.929 66.296 244.694 67.448 244.566 68.216C246.699 62.968 249.067 59.1493 251.67 56.76C254.273 54.3707 256.705 53.176 258.966 53.176C261.739 53.176 263.126 54.5627 263.126 57.336C263.126 59 262.657 62.008 261.718 66.36C260.907 70.072 260.502 72.5253 260.502 73.72C260.502 75.4267 261.121 76.28 262.358 76.28C263.211 76.28 264.214 75.768 265.366 74.744C266.561 73.6773 268.139 71.9707 270.102 69.624C270.614 69.0267 271.19 68.728 271.83 68.728C272.385 68.728 272.811 68.984 273.11 69.496C273.451 70.008 273.622 70.712 273.622 71.608C273.622 73.3147 273.217 74.6373 272.406 75.576C270.571 77.8373 268.587 79.6933 266.454 81.144C264.363 82.5947 261.974 83.32 259.286 83.32C257.11 83.32 255.467 82.7013 254.358 81.464C253.249 80.184 252.694 78.3493 252.694 75.96C252.694 74.7653 252.993 72.632 253.59 69.56C254.145 66.872 254.422 65.016 254.422 63.992C254.422 63.3093 254.187 62.968 253.718 62.968C253.163 62.968 252.374 63.6933 251.35 65.144C250.326 66.552 249.302 68.4293 248.278 70.776C247.254 73.1227 246.422 75.5973 245.782 78.2C245.313 80.248 244.758 81.6133 244.118 82.296C243.521 82.9787 242.539 83.32 241.174 83.32C239.766 83.32 238.699 82.6587 237.974 81.336C237.291 79.9707 236.95 78.328 236.95 76.408C236.95 74.7867 237.163 72.44 237.59 69.368C237.931 66.6373 238.102 64.8453 238.102 63.992C238.102 63.3093 237.867 62.968 237.398 62.968C236.758 62.968 235.947 63.736 234.966 65.272C233.985 66.808 233.025 68.7707 232.086 71.16C231.19 73.5493 230.465 75.896 229.91 78.2C229.441 80.2053 228.886 81.5707 228.246 82.296C227.649 82.9787 226.689 83.32 225.366 83.32ZM291.743 68.728C292.212 72.2267 292.895 75.6827 293.791 79.096C293.962 79.6507 294.047 80.2267 294.047 80.824C294.047 82.744 292.874 83.704 290.527 83.704C289.204 83.704 288.18 83.3413 287.455 82.616C286.772 81.8907 286.132 80.5253 285.535 78.52L285.471 78.264C283.85 80.2693 282.378 81.6133 281.055 82.296C279.775 82.9787 278.282 83.32 276.575 83.32C273.972 83.32 271.818 82.36 270.111 80.44C268.447 78.4773 267.615 75.9387 267.615 72.824C267.615 69.4107 268.34 66.2533 269.791 63.352C271.242 60.4507 273.226 58.0827 275.743 56.248C278.26 54.3707 281.076 53.24 284.191 52.856C285.002 44.792 286.538 37.7733 288.799 31.8C291.103 25.8267 294.154 22.84 297.951 22.84C299.786 22.84 301.3 23.672 302.495 25.336C303.732 27 304.351 29.5173 304.351 32.888C304.351 37.5813 303.199 43.064 300.895 49.336C298.591 55.608 295.54 62.072 291.743 68.728ZM297.247 29.112C296.01 29.112 294.836 32.2693 293.727 38.584C292.66 44.8987 291.935 51.768 291.551 59.192C296.287 48.952 298.655 40.632 298.655 34.232C298.655 32.6107 298.506 31.352 298.207 30.456C297.951 29.56 297.631 29.112 297.247 29.112ZM278.815 76.856C279.668 76.856 280.479 76.536 281.247 75.896C282.058 75.256 283.082 74.0187 284.319 72.184C283.892 69.0693 283.679 65.848 283.679 62.52C283.679 61.1973 283.7 60.1733 283.743 59.448C281.396 60.1307 279.455 61.688 277.919 64.12C276.383 66.552 275.615 69.24 275.615 72.184C275.615 75.2987 276.682 76.856 278.815 76.856Z" fill="white"/>
                </svg>
                </div>


            </div>
        </div>
    )
}
export default Footer;