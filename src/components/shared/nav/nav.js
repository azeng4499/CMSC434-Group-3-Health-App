import React from "react";
import "./nav.css";
import { CiMenuBurger } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Nav = ({ setPage, showHamburgerMenu, setShowHamburgerMenu }) => {
  const sidebarOpenClasses = "transform translate-x-0 ease-out";
  const sidebarClosedClasses = "transform -translate-x-full ease-in";

  return (
    <div className="nav-container">
      <aside
        className={`w-1/2 h-screen absolute top-0 bottom-0 left-0 right-0 transition-all duration-100 ${
          showHamburgerMenu ? sidebarOpenClasses : sidebarClosedClasses
        }`}
        style={{ zIndex: "99", backgroundColor: "#018D6F" }}
      >
        <div className="w-full py-[1.15rem] pl-4">
          <MdClose
            className="h-[2.8rem] w-[2.8rem]"
            onClick={() => {
              setShowHamburgerMenu(false);
            }}
          />
        </div>
        <div className="px-4 mt-8">
          <button
            className="border bg-white w-full rounded-full text-xl font-semibold py-2"
            onClick={() => {
              setShowHamburgerMenu(false);
              setPage("home");
            }}
          >
            Home
          </button>
        </div>
        <div className="px-4 mt-4">
          <button
            className="border bg-white w-full rounded-full text-xl font-semibold py-2"
            onClick={() => {
              setShowHamburgerMenu(false);
              setPage("calorie-tracker");
            }}
          >
            Calorie Tracker
          </button>
        </div>
        <div className="px-4 mt-4">
          <button
            className="border bg-white w-full rounded-full text-xl font-semibold py-2"
            onClick={() => {
              setShowHamburgerMenu(false);
              setPage("workout-tracker");
            }}
          >
            Workout Tracker
          </button>
        </div>
        <div className="px-4 mt-4">
          <button
            className="border bg-white w-full rounded-full text-xl font-semibold py-2"
            onClick={() => {
              setShowHamburgerMenu(false);
              setPage("workout-lookup");
            }}
          >
            Workout Lookup
          </button>
        </div>
        <div className="px-4 mt-4">
          <button
            className="border bg-white w-full rounded-full text-xl font-semibold py-2"
            onClick={() => {
              setShowHamburgerMenu(false);
              setPage("preset-workout");
            }}
          >
            Preset Workout
          </button>
        </div>
      </aside>

      <div className="nav-inner-container">
        <CiMenuBurger
          style={{ width: "2.5rem", height: "2.5rem" }}
          onClick={() => {
            setShowHamburgerMenu(true);
          }}
        />
        <svg
          width="902"
          height="188"
          viewBox="0 0 902 188"
          fill="none"
          style={{ height: "3.8rem", width: "300px" }}
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setPage("home");
          }}
        >
          <path
            d="M706.935 119.777C712.126 96.1288 717.337 72.9129 722.263 49.6363C723.118 45.594 724.71 44.2559 728.853 44.3169C740.426 44.4873 740.399 44.3028 742.875 55.7961C748.687 82.7666 754.47 109.744 760.426 136.682C761.324 140.747 760.18 142.347 756.145 142.144C755.149 142.094 754.148 142.162 753.149 142.167C745.247 142.204 745.042 142.252 743.202 134.525C742.184 130.247 740.168 128.104 735.661 128.537C734.184 128.679 732.671 128.453 731.176 128.385C722.305 127.985 721.818 128.241 720.205 136.726C719.465 140.62 717.907 142.655 713.563 142.099C710.619 141.722 707.583 142.086 704.588 142.071C704.126 142.069 703.665 141.81 702.4 141.426C703.886 134.349 705.372 127.269 706.935 119.777ZM736.482 111.88C736.24 108.191 736.319 104.445 735.677 100.826C734.818 95.985 733.4 91.2428 732.221 86.458C731.809 86.5135 731.396 86.569 730.983 86.6246C729.182 94.8178 727.382 103.011 725.388 112.086C729.478 112.086 732.581 112.086 736.482 111.88Z"
            fill="#02C39A"
          />
          <path
            d="M835.004 100.467C834.956 85.1998 834.912 70.3969 835.013 55.595C835.094 43.7614 833.646 44.4934 845.914 44.4171C848.908 44.3985 851.91 44.3153 854.897 44.4707C870.8 45.2979 879.808 53.1447 882.079 68.94C882.894 74.6087 883.016 80.6112 882.113 86.2464C879.873 100.215 870.79 107.56 856.597 108.032C854.14 108.113 850.932 107.054 850.375 111.536C850.325 120.778 850.138 129.59 850.225 138.398C850.259 141.778 849.121 143.423 845.647 143.115C845.318 143.086 844.983 143.143 844.651 143.155C835.147 143.5 835.155 143.5 835.142 133.86C835.127 122.883 835.096 111.907 835.004 100.467ZM850.154 75.5075C850.154 79.6597 849.996 83.8205 850.219 87.9608C850.336 90.1301 850.879 93.9897 851.648 94.0971C854.194 94.453 857.213 93.997 859.508 92.8065C861.541 91.7517 863.413 89.5537 864.373 87.4184C867.051 81.4633 867.243 75.1292 865.212 68.9348C863.686 64.2822 860.604 60.9126 855.522 59.8715C852.101 59.1706 849.995 60.0298 850.14 64.0504C850.266 67.5336 850.159 71.0252 850.154 75.5075Z"
            fill="#02C39A"
          />
          <path
            d="M773.885 55.4703C774.394 44.4292 774.394 44.3956 785.012 44.4441C789.002 44.4624 793.018 44.4246 796.976 44.8474C810.261 46.2664 818.753 54.4396 821.005 67.632C822.396 75.7807 822.472 83.8589 819.862 92.1948C814.648 103.357 805.861 108.184 794.148 107.976C790.505 107.911 789.08 109.374 789.137 112.994C789.265 121.142 788.984 129.3 789.24 137.442C789.374 141.728 787.938 143.236 783.578 143.245C774.16 143.264 774.172 143.476 774.149 134.273C774.085 108.16 774.011 82.0481 773.885 55.4703ZM805.128 72.5322C803.942 66.4606 801.352 61.5327 794.779 59.8666C791.124 58.9404 789.022 59.8076 789.107 64.1429C789.261 71.959 789.046 79.7824 789.205 87.5983C789.253 89.9511 790.028 92.2891 790.47 94.6339C793.305 94.0104 796.585 94.0638 798.851 92.5743C801.145 91.0661 803.246 88.2556 803.976 85.6134C805.053 81.7105 804.844 77.452 805.128 72.5322Z"
            fill="#02C39A"
          />
          <path
            d="M592.975 83.0661C592.921 71.9432 593.035 61.2838 592.868 50.6289C592.81 46.9093 594.211 45.7558 597.839 45.693C610.481 45.4744 610.48 45.3629 610.054 58.0083C609.803 65.4933 609.522 72.9774 609.309 80.4635C609.202 84.214 610.592 86.3938 614.87 86.1051C618.839 85.8372 622.847 85.8801 626.824 86.0787C630.428 86.2588 631.379 84.6322 631.292 81.2962C631.043 71.807 630.955 62.3116 630.954 52.8187C630.953 46.5088 631.465 46.0922 637.744 45.748C639.074 45.6751 640.409 45.6884 641.737 45.5915C646.384 45.2524 648.19 47.2578 648.16 52.024C648.004 76.6761 648.065 101.33 648.109 125.983C648.117 130.14 648.433 134.295 648.569 138.453C648.68 141.838 647.424 143.818 643.613 143.628C639.977 143.448 636.325 143.589 631.628 143.589C631.628 135.371 631.597 127.472 631.641 119.574C631.664 115.58 631.703 111.58 631.955 107.597C632.182 104.019 630.941 102.348 627.138 102.55C622.985 102.77 618.807 102.72 614.648 102.564C611.285 102.438 609.699 103.657 609.89 107.183C610.079 110.672 609.969 114.177 610.066 118.137C610.125 125.091 610.001 131.587 610.129 138.077C610.208 142.107 608.621 143.682 604.492 143.67C590.446 143.629 593.006 143.318 592.946 132.518C592.856 116.19 592.993 99.8603 592.975 83.0661Z"
            fill="#02C39A"
          />
          <path
            d="M458.766 120.458C460.191 126.432 461.185 132.152 462.607 137.764C463.499 141.288 462.71 142.909 458.941 142.611C458.445 142.571 457.943 142.606 457.444 142.609C448.018 142.665 447.897 142.702 445.117 133.619C444.176 130.546 442.484 129.215 439.428 129.24C437.932 129.253 436.435 129.169 434.939 129.164C424.891 129.136 424.818 129.121 422.459 138.546C421.739 141.424 420.402 142.826 417.303 142.645C413.987 142.451 410.651 142.609 407.324 142.574C406.854 142.569 406.386 142.344 405.15 142.019C406.477 135.407 407.7 128.793 409.139 122.227C414.406 98.1964 419.737 74.1802 425.078 50.1664C425.396 48.7344 426.014 47.369 426.788 45.7547C430.73 45.6111 434.407 46.009 438.015 45.673C441.973 45.3045 443.201 47.2597 443.899 50.6172C448.72 73.8084 453.633 96.9805 458.766 120.458ZM432.85 90.1689C431.257 97.403 429.664 104.637 427.908 112.612C431.527 112.799 434.46 113.185 437.347 112.963C438.259 112.893 439.905 111.033 439.76 110.271C438.291 102.585 436.519 94.9563 434.832 87.3117C434.513 87.3132 434.194 87.3146 433.875 87.316C433.586 88.0249 433.296 88.7338 432.85 90.1689Z"
            fill="#02C39A"
          />
          <path
            d="M570.62 45.5998C579.672 46.1293 579.675 46.1293 579.649 54.8663C579.645 56.1854 579.604 57.5043 579.532 59.2132C576.427 60.2744 573.388 61.4098 570.31 61.5251C562.693 61.8105 562.707 61.623 562.665 69.3551C562.543 92.1591 562.301 114.963 562.356 137.767C562.367 142.297 561.066 144.203 556.388 143.672C553.474 143.341 550.491 143.611 547.119 143.611C546.897 139.419 546.53 135.804 546.542 132.189C546.612 111.05 546.788 89.9111 546.89 68.772C546.925 61.7139 546.855 61.6934 540.051 61.6123C539.885 61.6103 539.718 61.6132 539.552 61.6108C530.307 61.4761 527.556 57.8942 530.393 48.8194C530.843 47.3822 533.84 45.9249 535.695 45.8777C547.176 45.5856 558.668 45.694 570.62 45.5998Z"
            fill="#02C39A"
          />
          <path
            d="M477.96 143.456C477.338 143.001 477.153 142.602 476.831 141.904C476.49 112.633 476.286 83.6625 476.085 54.6917C476.075 53.1925 476.115 51.6928 476.097 50.1937C476.063 47.358 477.372 45.8179 480.279 45.7813C480.446 45.7793 480.613 45.7801 480.779 45.7684C493.252 44.8867 493.272 44.8866 493.249 57.4842C493.211 77.9627 493.149 98.441 493.085 118.919C493.06 126.83 493.044 126.833 501.122 126.753C504.952 126.715 508.783 126.657 512.613 126.617C515.499 126.588 516.901 128.055 516.904 130.913C516.905 131.247 516.909 131.58 516.922 131.913C517.368 143.436 517.368 143.426 505.878 143.439C496.718 143.449 487.557 143.487 477.96 143.456Z"
            fill="#02C39A"
          />
          <path
            d="M336.649 141.963C331.871 142.809 327.118 143.387 322.364 143.392C321.603 143.393 320.198 140.84 320.179 139.453C320.039 129.125 319.996 118.787 320.306 108.464C320.442 103.926 319.073 102.089 314.37 102.534C310.406 102.908 306.372 102.752 302.38 102.571C299.083 102.422 298.018 103.799 298.056 106.991C298.18 117.489 297.951 127.992 298.17 138.486C298.254 142.503 296.714 143.64 292.909 143.673C281.076 143.777 281.076 143.895 281.076 132.095C281.076 105.443 281.157 78.7904 281 52.1395C280.973 47.4365 282.433 45.2722 287.308 45.7009C290.121 45.9482 292.97 45.7732 296.239 45.8011C297.31 48.6328 298.464 51.449 298.48 54.2713C298.528 63.0934 298.308 71.9263 297.857 80.7378C297.65 84.7713 299.323 86.1337 303.027 86.0579C307.012 85.9763 311.009 85.8787 314.985 86.0849C318.508 86.2677 319.659 84.8107 319.573 81.4001C319.338 72.0755 319.169 62.7416 319.359 53.4192C319.406 51.0725 320.562 46.9785 321.788 46.7464C326.037 45.942 330.553 46.3408 334.934 46.6943C335.492 46.7393 336.203 49.2152 336.247 50.5844C336.563 60.2364 336.886 69.8933 336.898 79.5491C336.922 100.201 336.76 120.853 336.649 141.963Z"
            fill="#02C39A"
          />
          <path
            d="M366.092 45.5864C373.415 45.4055 380.243 45.2997 387.064 45.0116C390.368 44.872 391.906 45.9743 391.985 49.5212C392.316 64.3122 393.083 61.4131 380.929 61.5667C367.225 61.74 367.419 61.6103 367.158 75.4917C367.065 80.4608 368.457 82.5423 373.611 82.0405C377.74 81.6385 381.934 81.9605 386.089 81.7558C389.161 81.6046 390.868 82.742 391.029 85.899C391.097 87.2296 391.244 88.5599 391.239 89.8899C391.213 97.81 390.399 98.5952 382.339 98.6057C378.673 98.6105 374.965 98.3007 371.361 98.7742C369.965 98.9575 367.791 100.841 367.704 102.073C367.259 108.373 367.244 114.718 367.449 121.036C367.479 121.967 369.439 123.533 370.585 123.609C375.232 123.917 379.913 123.644 384.575 123.801C390.225 123.991 391.923 125.84 392.032 131.466C392.236 141.991 391.801 142.451 381.231 142.435C373.567 142.423 365.892 142.598 358.241 142.246C350.715 141.9 350.357 141.462 350.281 134.018C350.117 118.023 350.097 102.024 350.139 86.0275C350.169 74.3669 350.488 62.7067 350.477 51.0465C350.473 46.9963 351.954 45.2323 356.098 45.542C359.247 45.7774 362.428 45.5872 366.092 45.5864Z"
            fill="#02C39A"
          />
          <path
            d="M223.099 124.648C214.967 138.415 203.074 147.075 188.477 151.968C181.601 154.273 174.265 155.175 167.299 157.254C156.037 160.614 144.908 164.419 133.142 168.225C133.142 164.633 132.335 159.994 133.291 155.751C136.339 142.214 144.451 132.411 157.371 127.15C170.483 121.81 182.396 114.763 192.516 104.79C193.289 104.028 194.374 103.582 196.362 102.329C197.084 120.006 184.793 127.671 173.945 137.285C177.872 136.851 181.798 136.417 186.457 135.883C188.014 135.534 188.839 135.286 189.978 135.009C191.527 133.986 192.763 132.993 194.21 132.275C194.981 132.373 195.54 132.195 196.072 132.007C196.044 131.998 196.046 132.057 196.419 132.105C197.981 131.474 199.17 130.794 200.36 130.114C200.183 129.851 200.007 129.587 199.831 129.324C198.686 129.867 197.541 130.41 196.218 130.844C196.579 129.53 197.119 128.323 197.958 126.998C199.037 125.686 199.816 124.494 200.835 123.17C201.391 122.616 201.706 122.193 202.021 121.771C202.021 121.771 202.285 121.418 202.521 120.99C202.893 119.911 203.029 119.259 203.164 118.608C202.942 118.539 202.719 118.47 202.496 118.401C202.163 119.103 201.83 119.805 201.497 120.508C201.287 118.812 200.744 117.079 200.93 115.428C201.404 111.233 202.203 107.076 202.79 102.452C202.244 96.4668 201.677 90.9386 201.363 85.396C201.208 82.6634 201.52 79.9043 201.934 76.9491C202.248 76.7409 202.543 77.0115 202.54 77.3429C202.723 78.7629 202.907 79.8516 203.092 80.9402C203.458 80.9238 203.824 80.9074 204.19 80.8911C204.648 78.5667 205.105 76.2423 205.563 73.753C205.563 73.5881 205.559 73.2582 205.559 73.2582C206.948 72.1799 208.338 71.1016 210.01 69.8037C210.776 71.6286 211.338 72.9666 211.879 74.2547C213.521 72.1344 215.141 70.0437 216.76 67.953C217.258 68.0996 217.756 68.2461 218.254 68.3927C222.496 86.774 232.638 104.544 223.099 124.648ZM213.108 109.511C209.647 115.783 206.187 122.056 202.463 128.806C208.988 123.492 212.543 117.004 213.499 108.851L213.765 108.893C213.765 108.893 213.551 109.002 213.108 109.511ZM207.26 97.9208C206.782 95.3114 206.303 92.7021 205.825 90.0927C205.546 90.1532 205.268 90.2137 204.99 90.2741C204.99 97.9735 204.99 105.673 204.99 113.372C205.375 113.4 205.76 113.427 206.146 113.455C206.535 108.573 206.924 103.692 207.26 97.9208ZM214.123 103.659C213.786 103.52 213.449 103.38 213.113 103.241C213.094 103.659 213.076 104.078 213.057 104.496C213.403 104.345 213.749 104.194 214.123 103.659ZM213.429 95.2099C213.538 95.1508 213.647 95.0917 213.756 95.0326C213.676 94.9423 213.596 94.8521 213.516 94.7619C213.446 94.8649 213.376 94.9679 213.429 95.2099ZM203.706 115.741C203.873 115.982 204.04 116.224 204.206 116.465C204.166 116.107 204.126 115.749 203.706 115.741Z"
            fill="#02C39A"
          />
          <path
            d="M178.334 73.9979C166.984 95.0687 149.358 109.251 129.611 121.159C128.145 122.043 125.294 122.166 123.853 121.327C106.563 111.253 91.0988 98.9262 79.7505 82.2393C69.9327 67.8028 66.1265 52.351 74.5953 35.7045C81.5564 22.0218 103.877 14.5927 117.514 21.806C120.917 23.6056 123.565 26.8312 126.511 29.3601C129.823 26.7001 133.489 23.7548 137.417 20.6141C150.937 16.9444 162.839 19.6158 172.751 29.0684C184.163 39.952 185.241 53.3214 180.801 67.66C180.165 69.7148 179.23 71.6772 178.334 73.9979ZM178.345 66.904C178.93 64.4816 179.657 62.0835 180.077 59.6329C183.759 38.1905 166.624 19.7879 144.917 21.82C135.463 22.7049 130.471 27.0798 128.299 36.2799C128.033 37.4067 127.414 38.4503 126.959 39.5325C125.526 38.2266 125.076 37.0585 124.841 35.8487C123.506 28.9769 119.54 24.6224 112.755 22.724C101.075 19.4559 85.9349 24.6545 78.9005 34.4548C70.338 46.3842 70.6519 62.4127 79.374 76.7138C89.234 92.8806 103.572 104.301 118.579 115.252C124.257 119.396 128.358 119.612 134.178 115.458C152.233 102.572 169.222 88.9106 178.345 66.904Z"
            fill="#02C39A"
          />
          <path
            d="M58.5349 129.996C59.0284 130.07 59.8539 129.99 59.9674 130.238C64.0674 139.176 72.3767 135.764 79.2874 136.944C68.8848 127.586 55.8448 120.14 56.9409 101.777C62.0255 106.095 65.7457 110.167 70.271 112.911C80.0516 118.841 90.1435 124.286 100.295 129.571C113.856 136.632 122.274 152.094 120.363 167.248C120.286 167.859 120.027 168.446 120.051 168.364C109.011 164.794 98.1934 161.297 86.9675 157.825C78.7009 155.789 70.5723 154.425 63.0425 151.513C49.1286 146.131 37.0312 138.109 30.0813 124.109C25.7469 115.378 25.0392 106.237 27.1359 96.8717C28.5174 90.7013 30.3215 84.6254 31.9848 78.1577C33.0587 74.745 34.0842 71.6819 35.6593 66.9775C38.0314 70.2436 39.6213 72.4327 41.2653 74.6964C41.7043 73.4528 42.2469 71.9158 42.9704 69.866C44.6326 70.8528 46.0607 71.7007 47.6917 72.3061C47.8944 72.0637 47.8433 72.0901 47.8433 72.0901C52.3388 74.8992 52.5576 79.2952 52.0862 83.8565C51.5097 89.4337 50.5625 94.9796 50.1683 100.567C49.5688 109.066 52.3136 116.833 55.554 124.515C53.6313 122.847 52.2387 120.96 50.846 119.072C50.5777 119.238 50.3093 119.404 50.041 119.57C51.253 122.14 52.4651 124.709 53.6772 127.279C53.2349 127.486 52.7926 127.693 52.3504 127.9C44.1673 122.081 41.2516 113.376 40.0244 103.511C36.1333 112.52 46.8926 129.573 57.8966 132.357C58.1087 131.57 58.3218 130.783 58.5349 129.996ZM48.9547 83.2763C48.8115 85.1795 48.6684 87.0826 47.9633 89.2547C47.5361 89.9335 47.109 90.6124 46.6146 92.1046C46.3469 94.3825 45.6499 96.7089 45.9011 98.9281C46.4168 103.483 47.4405 107.981 48.4578 112.708C48.5923 112.705 48.7268 112.702 48.8613 112.699C48.7175 112.462 48.5736 112.226 48.3737 111.136C48.3851 104.516 48.3966 97.8965 48.4846 90.5299C48.5157 90.0313 48.5468 89.5326 48.958 88.3752C49.1628 86.5897 49.3676 84.8043 49.8278 82.7165C49.9152 82.3802 50.0025 82.044 50.0899 81.7077C49.9871 81.6842 49.8843 81.6606 49.7815 81.6371C49.6959 82.0851 49.6103 82.5331 48.9547 83.2763ZM41.3583 85.863C41.0452 85.6603 40.7322 85.4575 40.4191 85.2548C40.5598 85.9116 40.7005 86.5685 40.8412 87.2253C41.036 86.9034 41.2307 86.5815 41.3583 85.863ZM42.2983 81.0411C42.1133 80.406 41.9284 79.7709 41.7434 79.1359C41.5037 79.2574 41.264 79.379 41.0242 79.5006C41.3508 80.0882 41.6773 80.6758 42.2983 81.0411ZM40.4605 95.4765C40.3073 95.2325 40.1542 94.9886 40.001 94.7446C39.8854 95.0268 39.7699 95.309 39.6543 95.5911C39.9136 95.6611 40.173 95.731 40.4605 95.4765ZM39.5721 90.9234C39.4446 90.907 39.317 90.8905 39.1894 90.8741C39.2789 90.9276 39.3683 90.9811 39.5721 90.9234Z"
            fill="#02C39A"
          />
          <path
            d="M89.2032 59.3412C86.6986 54.4497 84.3684 49.8873 81.603 44.4727C94.5541 44.4982 107.528 43.216 118.164 52.1626C121.01 54.5565 122.414 59.1189 123.567 62.9598C125.139 68.1979 125.837 73.6985 126.909 79.0866C127.655 79.1846 128.4 79.2826 129.146 79.3806C130.608 76.2702 132.808 73.289 133.379 70.0228C134.614 62.9622 138.321 58.6558 145.078 56.631C153.996 53.9583 162.682 55.4537 172.095 57.5143C166.63 64.3932 161.929 70.9867 156.517 76.9316C151.201 82.7697 143.852 83.3786 135.83 79.2586C137.766 76.8974 139.46 74.4845 141.51 72.4275C143.565 70.3669 145.976 68.6617 147.858 66.3482C141.2 68.4673 135.559 72.3523 132.736 78.6666C130.145 84.4612 129.052 90.9256 126.503 96.8745C125.32 89.5573 124.957 81.9784 122.727 74.9956C120.436 67.8214 114.742 62.7453 107.664 59.3954C111.625 64.8303 115.585 70.2652 119.611 75.7895C111.24 80.4334 100.772 77.3019 94.5849 68.7492C92.5514 65.9383 91.0968 62.7086 89.2032 59.3412ZM106.187 57.777C105.636 57.5898 105.084 57.4026 104.533 57.2153C104.469 57.425 104.404 57.6347 104.34 57.8444C104.854 57.9934 105.367 58.1424 106.187 57.777Z"
            fill="#02C39A"
          />
          <path
            d="M170 136.5C194.625 144.162 204.491 135.052 219.5 110L217 86.5L202 82.5C200.267 94.0566 199.15 99.6984 196 103L170 136.5Z"
            fill="#02C39A"
            stroke="#02C39A"
          />
          <path
            d="M76.9999 139.5C39.5214 136.942 29.2519 124.769 37.4999 76.5L50 76C52.5672 91.4742 51.8789 97.6861 57 102.5L58.5 105.5L83 136L76.9999 139.5Z"
            fill="#02C39A"
            stroke="#02C39A"
          />
          <path d="M39.5 77L35.5 67L47.5 72.28L39.5 77Z" fill="#02C39A" />
          <path
            d="M48 72.5L47.5 72.28M47.5 72.28L35.5 67L39.5 77L47.5 72.28Z"
            stroke="#02C39A"
            stroke-width="0.1"
          />
          <path
            d="M206 73L202 77V80L205 83.5L210 80.5L219 71.5L218.5 69L218 68H217L210 70L206 73Z"
            fill="#02C39A"
            stroke="#02C39A"
            stroke-width="0.1"
          />
        </svg>
        <FaCircleUser style={{ width: "3rem", height: "3rem" }} />
      </div>
    </div>
  );
};

export default Nav;
