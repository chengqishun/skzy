<template>
  <div class="character-content">
    <div class="nav-box">
      <div class="faction-nav">
        <div @click="setfactionActive('yggdrasil')"
             class="nav-item yggdrasil"
             :class="{active:active === 'yggdrasil'}">
          <svg id="图层_1"
               data-name="图层 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 46 43"
               class="icon yggdrasil"
               data-v-e9e4e74e="">
            <defs data-v-e9e4e74e="">
              <style data-v-e9e4e74e="">
              .cls-1 {
                fill-rule: evenodd;
              }
              </style>
            </defs>
            <path d="M18.76,22.34h0L20.46,24h0l5.93,5.88.85-.84V26.19l-8.91-8.82,0,0-1.74-1.72V8.49l-1.69,1.68v3.77l-5.09-5v-5L7.72,6v4.2l2.13,2.09H5.18l-1.7,1.68h8.06L13.66,16H3.9L.51,19.4H3.9l1.28-1.26h9.33ZM23.85,9.75V17.3l3-2.94V11l3.39-3.36H38.7l-2.12-2.1H34V3L32.34,1.35v4.2H28.09ZM14.51,34.51H9L7.3,36.19v4.62L9,42.49V37l.85-.84h7.21l-1.27,1.26h-3.4L9.85,40v2.52l3-2.94h4.66l3.4-3.36,3.39,3.36h2.12l.85-.84-8.48-8.39Zm5.1-27.28v9.6L22,19.16l.18-.18V7.23l3-2.94h3.82L27.24,3H23.42L20.88,5.55,19.61,4.29,23.42.51H21.3l-3,2.94h-3L14.09,4.71h3ZM41.25,11H31.91l-3,2.93h0l-5.09,5V21l3.39,3.36V23.18l3.4-3.36H38.7L37,18.14H29.37l5.09-5h6.36l4.67,4.62V15.2ZM29.37,34.51l-1.28-1.25h0l-8.48-8.4-.85.83h0v2.95l8.1,8-.47-.47H36.58v1.26l1.7,1.68V35.77L37,34.51Zm-1.7,2.94,2.12,2.1h5.09l3,2.94V40l-2.54-2.52Z"
                  class="cls-1"
                  data-v-e9e4e74e=""></path>
          </svg>
          <span class="title">圣树</span>
        </div>
        <div @click="setfactionActive('sakura')"
             class="nav-item sakura"
             :class="{active:active === 'sakura'}">
          <svg id="图层_1"
               data-name="图层 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 43 43"
               class="icon sakura"
               data-v-e9e4e74e="">
            <defs data-v-e9e4e74e="">
              <style data-v-e9e4e74e="">
              .cls-1 {
                fill-rule: evenodd;
              }
              </style>
            </defs>
            <path d="M4,27.52l.45-3-1.9-.34-.7,4h0l2.83,2.9,1.45-1.42ZM34,9.42l1.74-.85L33.92,4.92h0l-4-.68-.33,2,3,.5ZM9.3,9.42l1.41-2.7,3-.5L13.44,4.3l-4,.58h0L7.5,8.49Zm12.33,10a2.29,2.29,0,1,0,2.27,2.29A2.28,2.28,0,0,0,21.63,19.45Zm0,20.92L18.92,39,18,40.72l3.59,1.91h0l3.64-1.8L24.36,39Zm3.29-23.14.88,2.71,6.12-2a1.36,1.36,0,1,1,.28.86l-6.12,2L27,23.5l1.25-.91,3,2.28L36,24.74l7-4.82-.79-2.45L39.33,16l1.45-2.85L40,10.71l-8.51.23-3.94,2.7-1.06,3.59Zm16.54,11-.59-4-2,.3.45,3-2.13,2.17,1.35,1.39,2.91-2.83h0Zm-19.83-.84-2.3-1.67-3.79,5.21a1.34,1.34,0,0,1,0,1.56,1.36,1.36,0,1,1-2.2-1.6,1.34,1.34,0,0,1,1.48-.49l3.78-5.22L16.31,23.5,15.83,25l-3.74-.1-3.78,2.9-2.84,8,2.08,1.51,3.15-.5L11.2,40l2.09,1.52,6.76-5.18,1.59-4.51-1.25-3.53Zm9.55-2.51-3.75.1L27,23.5l-2.3,1.67,3.79,5.22a1.34,1.34,0,0,1,1.48.49,1.36,1.36,0,0,1-2.2,1.6,1.35,1.35,0,0,1,0-1.56l-3.78-5.21-2.3,1.67,1.25.91-1.25,3.52,1.59,4.5L30,41.49,32.07,40l.5-3.16,3.16.5,2.09-1.51-2.84-8ZM18.34,17.23h2.87V10.82a1.35,1.35,0,0,1-1-1.29,1.4,1.4,0,0,1,2.79,0,1.36,1.36,0,0,1-.94,1.28v6.42h2.84l-.48-1.47,3.08-2.12,1.36-4.57L26.47.9H23.9L21.64,3.16,19.38.9H16.79L14.37,9.07l1.36,4.58,3.09,2.12Zm-2,6.27.87-2.7-6.12-2A1.35,1.35,0,0,1,8.7,17.56a1.35,1.35,0,0,1,2.64.39l6.12,2,.88-2.71H16.79l-1.06-3.58L11.8,11l-8.51-.23L2.5,13.17,4,16,1.1,17.47.3,19.93l7,4.83,4.77.12,3-2.28Z"
                  class="cls-1"
                  data-v-e9e4e74e=""></path>
          </svg>
          <span class="title">真樱</span>
        </div>
        <div @click="setfactionActive('niro')"
             class="nav-item niro"
             :class="{active:active === 'niro'}">
          <svg id="图层_1"
               data-name="图层 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 45 43"
               class="icon niro"
               data-v-e9e4e74e="">
            <defs data-v-e9e4e74e="">
              <style data-v-e9e4e74e="">
              .cls-1 {
                fill-rule: evenodd;
              }
              </style>
            </defs>
            <path d="M39,24l-2.84-4.87L33.27,21l2.5,4.18L32.6,30.37ZM25,32.91c1-3.9,2.15-7.76,3.38-9.67a11.61,11.61,0,0,1,2-2.32l-2.56-2.27L23.07,28.9Zm-2.31-3.16-2.15,4.7,2.15,7.68,2.14-7.68Zm21-8.65-6.41,6.42,1.46,2.55-1,1.73H34.37l1.12-2.05-5.14,5.12h9l3.09-5-2-3.49ZM27.35,31.89,25.64,34l.43.85h.85l-2.15,3.7,6.87-6.68ZM22.64,19a2.22,2.22,0,0,0,2.13-2.31,2.14,2.14,0,1,0-4.27,0A2.23,2.23,0,0,0,22.64,19Zm0-2.87a.85.85,0,1,1-.86.85A.86.86,0,0,1,22.64,16.09ZM22.64,5s4-.12,6.38,1.8L25.75,1.14H19.53L16.25,6.78C18.68,4.86,22.64,5,22.64,5Zm0,4.72c6.32,0,7.71,3.82,7.71,3.82h6.86V12.24a23.59,23.59,0,0,1-3.86-.42,8.17,8.17,0,0,1-2.77-1.63,10.62,10.62,0,0,0-7.94-3.34,10.59,10.59,0,0,0-7.94,3.34,8.24,8.24,0,0,1-2.78,1.63,23.51,23.51,0,0,1-3.85.42v1.28h6.85S16.31,9.7,22.64,9.7ZM10.91,31.8H7.57l-1-1.73L8,27.52,1.63,21.1l3.24,5.28-2,3.49,3.08,5h9L9.78,29.75Zm8.3,3.07.43-.85-1.72-2.13H13.64l6.86,6.68-2.15-3.7ZM14.94,20.92a11.57,11.57,0,0,1,2,2.32c1.24,1.91,2.38,5.77,3.39,9.67l1.88-4L17.5,18.65ZM9.1,19.08,6.26,24l6.41,6.42L9.5,25.2,12,21Zm8.51-2.61,5,11.26,5-11.26L31.47,20a22.8,22.8,0,0,1,8.74-3.51V15.23H29.49A8.06,8.06,0,0,0,22.64,11a8.07,8.07,0,0,0-6.86,4.27H5.07v1.28A22.8,22.8,0,0,1,13.81,20Zm5-3.37c3.05,0,3.85,2.13,3.85,2.56s-1,4.27-3.85,4.27-3.86-3.84-3.86-4.27S19.59,13.1,22.64,13.1Z"
                  class="cls-1"
                  data-v-e9e4e74e=""></path>
          </svg>
          <span class="title">尼罗</span>
        </div>
        <div @click="setfactionActive('olympia')"
             class="nav-item olympia"
             :class="{active:active === 'olympia'}">
          <svg id="图层_1"
               data-name="图层 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 43 40"
               class="icon olympia"
               data-v-e9e4e74e="">
            <defs data-v-e9e4e74e="">
              <style data-v-e9e4e74e="">
              .cls-1 {
                fill-rule: evenodd;
              }
              </style>
            </defs>
            <path d="M17.44,13.34V28.76l-3.87,3.85v-18l2.58-2.57Z"
                  class="cls-1"
                  data-v-e9e4e74e=""></path>
            <polygon points="8.41 0.92 2.39 6.92 9.27 13.77 13.57 9.49 10.99 6.92 9.27 8.63 7.55 6.92 10.56 3.92 18 11 28.2 0.92 8.41 0.92"
                     class="cls-1"
                     data-v-e9e4e74e=""></polygon>
            <polygon points="37.23 0.92 30.78 0.92 19.16 11.92 19.16 16.34 20.45 17.62 34.22 3.92 37.23 6.92 35.51 8.63 33.79 6.92 31.21 9.49 35.51 13.77 42.39 6.92 37.23 0.92"
                     class="cls-1"
                     data-v-e9e4e74e=""></polygon>
            <polygon points="30.78 12.49 29.48 11.2 19.16 21.48 19.16 28.76 13.63 34.33 8.41 34.33 4.11 38.61 17.87 38.61 24.32 32.19 24.32 22.34 30.78 15.91 30.78 12.49"
                     class="cls-1"
                     data-v-e9e4e74e=""></polygon>
            <polygon points="36.35 34.31 30.81 34.31 30.78 18.48 26.05 23.19 26 32.66 20.02 38.61 40.67 38.61 36.35 34.31"
                     class="cls-1"
                     data-v-e9e4e74e=""></polygon>
          </svg>
          <span class="title">奥山</span>
        </div>
        <div @click="setfactionActive('stars')"
             class="nav-item stars"
             :class="{active:active === 'stars'}">
          <svg id="图层_1"
               data-name="图层 1"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 48 43"
               class="icon stars"
               data-v-e9e4e74e="">
            <path d="M19.93,20,19,21.1l.26.87,1.5-1.21a2,2,0,0,0-.25-.43A1.91,1.91,0,0,0,19.93,20Zm3.71,23.54Zm15.5-17.71c3.93,1,7.86,2.25,7.86,2.25s-3.88-1.41-7.65-2.95ZM20.94,13.45,16.66,10l3.45,4.36a1.68,1.68,0,0,0,.44-.27A2.29,2.29,0,0,0,20.94,13.45Zm5.54,7.31L28,22l.26-.87L27.35,20a1.71,1.71,0,0,0-.62.35A1.39,1.39,0,0,0,26.48,20.76ZM7.92,25.11C4.15,26.65.27,28.06.27,28.06s3.93-1.21,7.86-2.25Zm29.21,2.57c-.13-.84,2.72-6.18,4.92-10.15l3.21-.32-2.87-.29c1.19-2.15,2.12-3.75,2.12-3.75h0s-1.22,1.61-2.82,3.67c-2.33-.25-5.45-.63-8.25-1.06C34.88,10,37.18,1.87,37.18,1.87h0s-3,8.11-5.3,13.65a21.54,21.54,0,0,1-4.72-1.17l-1.39,1.76,4.84.93L25.77,18l1.58,2a16.92,16.92,0,0,1,2.94-.8,6,6,0,0,1-.79,1.39,2,2,0,0,1-1.13.08l-.13.45,2.37,3L28,22l-.25.82c.47.29.76.54.81.72.34,1.34-4.87,19.91-4.9,20,0-.1,1.39-19.37,2.84-22.76l-1.82-1.47-1,12.23-1-12.23L20.8,20.76c1.45,3.39,2.83,22.66,2.84,22.76,0-.1-5.25-18.67-4.9-20,0-.18.34-.43.8-.72L19.3,22l-2.64,2.14,2.38-3-.14-.45a2,2,0,0,1-1.12-.08,5.56,5.56,0,0,1-.8-1.39,16.82,16.82,0,0,1,2.95.8l1.58-2L16.66,17l4.84-.93-1.39-1.76a21.39,21.39,0,0,1-4.72,1.17C13.11,10,10.09,1.87,10.09,1.87h0s2.3,8.09,3.74,13.91c-2.8.43-5.91.81-8.25,1.06C4,14.78,2.77,13.17,2.77,13.17h0s.92,1.6,2.11,3.75L2,17.21s1.31.12,3.22.32c2.19,4,5,9.32,4.91,10.15C9.94,29,1.67,35,1.67,35s8.54-5.51,9.86-5.19S22.59,43.17,22.59,43.17h0s-8.21-14.11-8-15.47a3.8,3.8,0,0,1,1.14-1.46L15.05,25a4,4,0,0,1-1.85.56c-.77-.19-4.26-4.47-7-8,2.45.28,5.59.66,8.32,1.1A11.29,11.29,0,0,1,15,21.52c-.09.35-1.13,1-2.62,1.67l1.32,1.34a4.32,4.32,0,0,1,2.26-.07c1.07.87,7.72,19,7.73,19.06h0s6.66-18.19,7.73-19.06a4.28,4.28,0,0,1,2.25.07L35,23.19c-1.49-.71-2.54-1.32-2.63-1.67a11.85,11.85,0,0,1,.42-2.78c2.73-.44,5.87-.82,8.32-1.1-2.73,3.49-6.21,7.77-7,8A4,4,0,0,1,32.22,25l-.68,1.2a4,4,0,0,1,1.15,1.46c.21,1.36-8,15.47-8,15.47h0S34.42,30.1,35.75,29.78,45.61,35,45.61,35,37.34,29,37.13,27.68ZM23.64,43.51h0Zm0,0Zm0,0Zm0,0Zm0-33.53.92,4.9,1.78-1.44c-1.4-3-2.7-13.7-2.7-13.7h0s-1.3,10.69-2.7,13.7l1.77,1.44Zm3.52,4.36L30.61,10l-4.27,3.46a2.29,2.29,0,0,0,.39.63A1.6,1.6,0,0,0,27.16,14.35Z"
                  data-v-e9e4e74e=""></path>
          </svg>
          <span class="title">众星</span>
        </div>
      </div>
      <div class="character-nav">
        <div class="character-nav-item"
             :class="`${item} ${item === currentCharacter ? 'active' : ''}`"
             @click="selectCharacter(item)"
             v-for="item,index in characterList[active]"
             :key="index"></div>
        <div class="character-nav-prev"></div>
        <div class="character-nav-next"></div>
      </div>
    </div>
    <div class="character-box"
         v-if="currentCharacter">
      <transition enter-active-class="animate__animated animate__fadeInLeft"
                  appear>
        <img :src="charactersData[currentCharacter].role"
             alt=""
             class="pic wrdd">
      </transition>

      <div class="character-info">
        <div class="faction-icon yggdrasil"></div>
        <div class="saying">
          <img :src="charactersData[currentCharacter].saying"
               alt="">
        </div>
        <div class="name">
          <img :src="charactersData[currentCharacter].name"
               alt="">
        </div>
        <div class="desc-box">
          <div class="desc">
            {{charactersData[currentCharacter].desc}}
          </div>
        </div>
        <div class="preview">
          <div class="title">
            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE5MSAzMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjM3LDEzLjczYTE3LjcsMTcuNywwLDAsMS0yLjIyLDQuODQsMTEuNDIsMTEuNDIsMCwwLDEtMy4zOC00Ljg0Wk0yNCwxMS40bC0xLjc4LDEuNzFoLS4yOVY5LjJoNS4yM2MuMzEsMCwuNTgtLjExLjY0LS4zNUMyNi43NSw3LjksMjUsNi41LDI1LDYuNUwyMy40LDguNTlIMjEuOTNWNS42NGMuNjItLjExLjc3LS4zMS44MS0uNjRsLTQtLjNWOC41OUgxNC40MWwuMTEuMzljLS42MS0uNjQtMS4yMS0xLjIzLTEuMjEtMS4yM2wtMS4xLDEuODNWNS40NGMuNTUtLjA5Ljc3LS4zMS44Mi0uNjNMOS4yNSw0LjQ1djUuM0g2LjgxbC4xNy42Mkg5LjI1djMuOGMtMS4xNy4zMS0yLjExLjU1LTIuNjguNjZsMS4yNywzLjU0YTEsMSwwLDAsMCwuNjItLjY2bC43OS0uNTNWMjEuOGMwLC4yNC0uMDkuMzMtLjQuMzNTNi43MiwyMiw2LjcyLDIydi4yOGEyLjA4LDIuMDgsMCwwLDEsMS41OC45NSw0LjQ5LDQuNDksMCwwLDEsLjQyLDIuMTFDMTEuOCwyNS4xLDEyLjIxLDI0LDEyLjIxLDIyVjE1YzEuMTctLjg4LDIuMDctMS42NSwyLjc1LTIuMjRsMC0uMThjLS45LjI2LTEuODMuNTMtMi43MS43N3YtM2gyLjY2Yy4zMSwwLC41My0uMTEuNi0uMzUtLjItLjI1LS40Ni0uNTMtLjczLS44Mmg0djMuOTFIMTQuODFsLjIuNjJoMS40YTE3LjgzLDE3LjgzLDAsMCwwLDIuNTMsNi40MiwxOC40OSwxOC40OSwwLDAsMS02LjczLDQuOTJsLjE0LjI1YTIwLjgsMjAuOCwwLDAsMCw4LTMuNDMsMTUuODIsMTUuODIsMCwwLDAsNC45NCwzLjQzLDMuNzIsMy43MiwwLDAsMSwyLjg2LTIuNzdsMC0uMjdhMjQuMDUsMjQuMDUsMCwwLDEtNS44LTIuMTcsMTYuNzksMTYuNzksMCwwLDAsMy41NC01LjcyYy41Ny0uMDcuNzktLjE1Ljk1LS40MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNiwxMy40OXYyLjJIMzMuNDd2LTIuMlptLTIuNTcsNS4yNVYxNi4zSDM2djIuNDRaTTM1LjkxLDdBOS41Niw5LjU2LDAsMCwxLDM3LjEsOS4xOGMtMi4xNCwwLTQuMTYsMC01LjcyLDBhMjIsMjIsMCwwLDAsNC44NC0zYy40NCwwLC42Ni0uMTguNzQtLjRMMzMsNC4zOWExMC44NCwxMC44NCwwLDAsMS0zLjI5LDQuNTMsNC42MSw0LjYxLDAsMCwxLS43My4yNGwxLjI4LDMuMDhhMSwxLDAsMCwwLC4zNS0uMjVWMjUuMzRIMzFjMS4yNSwwLDIuNDQtLjY2LDIuNDQtMXYtNUgzNnYyLjIyYzAsLjI0LS4wNy4zNy0uMzcuMzdzLTEuNzYtLjA5LTEuNzYtLjA5di4yOWExLjcyLDEuNzIsMCwwLDEsMS40LDEsNS41Niw1LjU2LDAsMCwxLC4zMywyLjE1YzMuMDYtLjI2LDMuNDgtMS4zOCwzLjQ4LTMuMzZWMTRhMS4zNSwxLjM1LDAsMCwwLC44OC0uNDZsLTIuODQtMi4xNS0xLjM0LDEuNTFIMzMuNThMMzAuOSwxMS44YzIuNjgtLjc3LDQuOTItMS41Miw2LjM3LTIuMDdhNS4zMSw1LjMxLDAsMCwxLC4yNiwxLjQxYzIuNjIsMi4xMSw1LjMtMy4xLTEuNDUtNC4yOVptOS40Nyw3LjUyYzMuMjgsMCw0LjQtLjU1LDQuNC0xLjc4LDAtLjU1LS4yLS45LTEtMS4yM2wtLjA4LTIuMjVoLS4yMmExMC44NCwxMC44NCwwLDAsMS0xLjA2LDIuMTYuNjYuNjYsMCwwLDEtLjU5LjI0Yy0uMjQsMC0uNjgsMC0xLjEsMEg0NC4zOWMtLjQ4LDAtLjU3LS4wOS0uNTctLjM5VjkuMTZjMS42NS0uMzEsMy4zLS43MSw0LjQ0LTEsLjczLjIyLDEuMTcuMTcsMS40My0uMDdsLTMtMi40MmEyOS4wNSwyOS4wNSwwLDAsMS0yLjg4LDIuNzVWNS43M2MuNDYtLjA5LjY2LS4yOS43MS0uNTdMNDAuNyw0Ljg1VjEyYzAsMiwuNDgsMi41MSwyLjg0LDIuNTFabTMuNzIsNC44NmgtLjIyYTExLjU3LDExLjU3LDAsMCwxLTEuMSwyLjM3LjcuNywwLDAsMS0uNTkuMjZjLS4yNSwwLS43MSwwLTEuMTUsMEg0NC41N2MtLjQ4LDAtLjU5LS4xMS0uNTktLjQyVjE5LjM0YzEuNzEtLjQsMy4zNC0uODYsNC41LTEuMjQuNzcuMiwxLjIxLjE0LDEuNDUtLjFsLTMuMjEtMi40NUEyMi4xMywyMi4xMywwLDAsMSw0NCwxOC40MVYxNS44OGMuNDgtLjA2LjY4LS4yOC43LS41N0w0MC44MywxNVYyMi4zYzAsMiwuNTEsMi41NSwyLjkzLDIuNTVoMS44OWMzLjM2LDAsNC41LS41NSw0LjUtMS44LDAtLjU1LS4xOS0uOS0xLTEuMjVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTMuODQsNC41NkE4LjIyLDguMjIsMCwwLDEsNTQuMzksOGMyLjM1LDIuMzksNS45NC0yLjA3LS4zNy0zLjQ3Wk01Ny4zOCwxNGExOC43OSwxOC43OSwwLDAsMCwyLjA5LTMuMzhjLjU1LS4wNy43OS0uMTQsMS0uMzVMNTcuODQsNy43Myw1Ni4yNiw5LjI3SDUxLjg0bC4yLjYxaDQuMzVhMjEuNzQsMjEuNzQsMCwwLDEtNS4xLDlsLjE4LjE4YTE3LjU2LDE3LjU2LDAsMCwwLDMtMnY4LjI2SDU1YTIuODYsMi44NiwwLDAsMCwyLjM3LS44OHYtOWE3LjY4LDcuNjgsMCwwLDEsLjU1LDIuMzNjMi4wNywxLjc4LDQuNDQtMi4wNy0uNTUtMy43Wk03MiwxOS4xNGgtLjI0YTI1LjU0LDI1LjU0LDAsMCwxLTEsMi44MS40Ny40NywwLDAsMS0uNDQuMjlINjguNTNjLS40LDAtLjQ3LS4wOS0uNDctLjM1VjE2LjY1YS40NC40NCwwLDAsMCwuMTgsMFYxOGguNTFjMS40NSwwLDIuMzctLjUzLDIuMzctLjY5VjcuMjJhMS4yNiwxLjI2LDAsMCwwLC45LS40NmwtMi41LTEuOTVMNjguMTUsNi4zN0g2My41MWwtMy0xLjEzdjEzSDYxYzEuNCwwLDIuMjYtLjQ5LDIuMjYtLjY4VjdoNXY5LjA4TDY2LjkyLDE2Yy4yLTEuODUuMTgtNCwuMjItNi4zNy40OC0uMDcuNzMtLjI5Ljc5LS42MmwtMy43MS0uMzNjMCw4LjMzLjU5LDEzLTYuMzgsMTYuMzZsLjE4LjNjNC0xLjEyLDYuMi0yLjYxLDcuNDUtNC41OXYxLjkxYzAsMS42Ny4zMywyLjE4LDIuMjksMi4xOGgxLjQ3YzIuNjQsMCwzLjU4LS42LDMuNTgtMS42M2ExLDEsMCwwLDAtLjc0LTEuMDhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODEuNCwxMi4xNWgtLjNWOS4yOUg4NGEuNzUuNzUsMCwwLDAsLjM1LS4wN3YyLjUzYy0uNzktLjctMS42My0xLjQxLTEuNjMtMS40MVpNOTQuMzEsNi44N2MuMzMsMCwuNTctLjExLjYxLS4zNS0xLS45LTIuNzItMi4xOC0yLjcyLTIuMThMOTAuNyw2LjI2SDgzLjg3bC4xNy42MWgzLjQzYzAsMS4xLDAsMi40NCwwLDMuMzdoLS4yNmwtMi43My0xLjFhLjI5LjI5LDAsMCwwLC4xMS0uMmMtLjc5LS44Mi0yLjE4LTItMi4xOC0yTDgxLjE2LDguNjdIODEuMVY1LjQ0Yy41LS4wOS42Ni0uMjguNjgtLjU1bC0zLjMyLS4yOHY3LjU0SDc3LjZ2LTVjLjQ4LS4wNy42NC0uMjcuNjgtLjUzbC0yLjg2LS4yNnY1Ljc4SDc0LjA2bC4xOC42MUg4NC4zNXYyLjY2bC0yLjQ4LS43OUEyNC44OCwyNC44OCwwLDAsMSw4MSwxNy43MVYxMy44MmMuNTktLjExLjc3LS4zMy44MS0uNjJsLTMuNDUtLjN2Mi41bC0yLjUzLS43NUExOC43NiwxOC43NiwwLDAsMSw3NCwyMC41bC4yOS4xOGExMSwxMSwwLDAsMCwzLjkzLTQuNThoLjA5djMuNzJoLjQ2YTUuMDcsNS4wNywwLDAsMCwxLjMyLS4xOEExMiwxMiwwLDAsMSw3NCwyNS4wN2wuMDkuMzNjNS4xOS0xLjE2LDguMTUtMy4zNCwxMC4yMi04LjVWMjFoLjQyYzEuMTYsMCwyLjMxLS42NCwyLjMxLS45VjEwLjg1aDR2LjlsLTMuMjEtLjI4YzAsNywuNDYsMTEtNi4yNywxMy42bC4xOC4zNmM0LjM1LTEuMSw2LjQ2LTIuNjQsNy41Mi00Ljc4YTE2LDE2LDAsMCwxLDIuNTksNC4yOWMyLjg4LDEuNzIsNC44NC0zLjY3LTIuMzctNC44MS44MS0yLjA1Ljc5LTQuNi44My03Ljc4LjQyLS4wNy42Ni0uMjIuNzMtLjQ5djguNDdoLjQ2YTQuMzIsNC4zMiwwLDAsMCwyLjI4LS43MVYxMS4yYTEuMjMsMS4yMywwLDAsMCwuNzUtLjM5TDkyLjA5LDguOTJsLTEuMjEsMS4zMkg4OC4xNWEyNC43NSwyNC43NSwwLDAsMCwyLjYyLTMuMzdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTAwLjA2LDI1LjM3aDEuMTdMMTA1LjM1LDEyaC0xLjE3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNC4xOSwxMy4yN2MxLjQ1LDAsMi4yMy44NCwyLjIzLDIuNDlzLS43NiwyLjU4LTIuMzMsMi41OGgtLjQ1di0uOGMwLTEuNDQsMC0yLjg3LDAtNC4yN1ptMCw1LjU3YzMuMjQsMCw0LjQtMS4zNyw0LjQtMy4wNywwLTEuOTItMS4yNC0zLTQuMzMtM2gtNC4xNXYuNDdsMS4yMy4xYzAsMS40LDAsMi44LDAsNC4yMnYuNmMwLDEuNDEsMCwyLjgxLDAsNC4xOWwtMS4yMy4xMnYuNDZoNS4wNXYtLjQ2bC0xLjQ2LS4xNWMwLTEuMjMsMC0yLjQ0LDAtMy40NloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjMuMjYsMTcuNjFjMC0xLjU3LDAtMywwLTQuMzRoLjc3YTEuODcsMS44NywwLDAsMSwyLjEsMi4wOCwyLDIsMCwwLDEtMi4xMSwyLjI2Wm01LjExLDQuNzctLjQ1LTIuMjRhMi40LDIuNCwwLDAsMC0yLjQ3LTIuMzRjMi4xMy0uMzMsMi44OS0xLjM4LDIuODktMi40OSwwLTEuNjItMS4zLTIuNTYtMy43LTIuNTZoLTQuODl2LjQ3bDEuMjIuMWMwLDEuNCwwLDIuOCwwLDQuMjJ2LjZjMCwxLjQxLDAsMi44MSwwLDQuMTlsLTEuMjIuMTJ2LjQ2aDQuOHYtLjQ2bC0xLjI1LS4xMmMwLTEuMzksMC0yLjc5LDAtNC4yMmguNjZjMSwwLDEuMzguNTQsMS41NywxLjY2bC4zOSwxLjg4Yy4xNCwxLjEuODMsMS40NiwyLjA4LDEuNDZhNS44LDUuOCwwLDAsMCwxLjYyLS4ydi0uNDZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTM4LjU1LDIwLjFoLS43NmwtLjYzLDIuMjhIMTM0LjFjMC0xLjQxLDAtMi44NiwwLTQuMzd2MGgxLjg2bC4xOSwxLjQ1aC42OFYxNmgtLjY4bC0uMjEsMS41aC0xLjg0YzAtMS40NCwwLTIuODQsMC00LjJoMi43NmwuNjMsMi4xOGguNzlWMTIuNzVoLTcuNzh2LjQ3bDEuMjMuMWMwLDEuNCwwLDIuOCwwLDQuMjJ2LjZjMCwxLjQxLDAsMi44MSwwLDQuMTlsLTEuMjMuMTJ2LjQ2aDguMDdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQ5LjQ3LDEyLjc1aC0zLjM0di40MmwxLjQzLjIxLTIuMTksNy4zNC0yLjQ5LTcuMzgsMS40MS0uMTd2LS40MmgtNC44di40N2wuOTQuMDksMy40Niw5LjYzaDEuMjNsMy4yMS05LjU4LDEuMTQtLjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTU1LjE4LDEzLjIydi0uNDdoLTQuOHYuNDdsMS4yMi4xYzAsMS40LDAsMi44LDAsNC4yMnYuNmMwLDEuNDEsMCwyLjgxLDAsNC4xOWwtMS4yMi4xMnYuNDZoNC44di0uNDZMMTU0LDIyLjMzYzAtMS40MSwwLTIuODEsMC00LjIxdi0uNThjMC0xLjQyLDAtMi44MywwLTQuMjJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTY0LjYzLDIwLjFoLS43NmwtLjYzLDIuMjhoLTMuMDZjMC0xLjQxLDAtMi44NiwwLTQuMzd2MEgxNjJsLjE5LDEuNDVoLjY4VjE2aC0uNjhsLS4yMSwxLjVoLTEuODRjMC0xLjQ0LDAtMi44NCwwLTQuMmgyLjc2bC42MywyLjE4aC43OVYxMi43NWgtNy43OHYuNDdsMS4yMy4xYzAsMS40LDAsMi44LDAsNC4yMnYuNmMwLDEuNDEsMCwyLjgxLDAsNC4xOWwtMS4yMy4xMnYuNDZoOC4wN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODAuNDMsMTIuNzVoLTMuMjd2LjQ3bDEuMjguMTctMS44Nyw3LjE4LTItNy4xOSwxLjQ0LS4xNnYtLjQ3aC00LjQ0di40N2wxLjI3LjE0LTIsNy4xOC0xLjg2LTcuMiwxLjI4LS4xMnYtLjQ3aC00LjZ2LjQ3bC45My4wOSwyLjg0LDkuNjNoMS4yNGwyLjI4LTcuNjIsMi4yOSw3LjYyaDEuMjZsMi43NS05LjU1LDEuMjMtLjE3WiIvPjwvc3ZnPg=="
                 alt="">
          </div>
          <div class="video-box"><img :src="charactersData[currentCharacter].preview"
                 alt="">
            <div class="play-mask"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      default: "yggdrasil",
    },
  },
  data() {
    return {
      currentCharacter: "wrdd",
      characterList: {
        yggdrasil: ["wrdd", "te", "hdr"],
        sakura: ["yd", "gcl", "dgz"],
        niro: ["xiu", "axls", "sbk"],
        olympia: ["bsd", "abl", "hl"],
        stars: ["lwt", "nad", "axl"],
      },
      characters: {
        wrdd: {},
      },
      charactersData: {
        wrdd: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/wrdd.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/wrdd.png",
          icon: "yggdrasil",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/wrdd.png",
          desc: "新人小队成员，乐观开朗，面对任何苦难都会不折不挠地迎难而上，这种性格使得她在作战培训中进步神速",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/wrdd.gif",
        },
        te: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/te.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/te.png",
          icon: "yggdrasil",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/te.png",
          desc: "塔列朗家族的继承者，在与深空之眼合资完毕后加入董事会，现在是第三部门的管理者，拥有令人吃惊的果决和魄力。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/te.gif",
        },
        hdr: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/hdr.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/hdr.png",
          icon: "yggdrasil",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/hdr.png",
          desc: "在深空之眼创立初期就加入的双生子，巴德尔和霍德尔。如果说巴德尔是照亮情报科的温暖阳光，那么霍德尔就仿佛是角落里默默追随光芒的槲寄生，安静而纤细。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/hdr.gif",
        },
        yd: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/yd.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/yd.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/yd.png",
          desc: "对自我要求非常严格的修正者，雉小队的队长。虽然话语不多，但作战时的分析都简明扼要，是个能将任何任务放心托付的人。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/yd.gif",
        },
        gcl: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/gcl.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        dgz: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        xiu: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/xiu.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/xiu.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        axls: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/axls.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/axls.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "深空之眼的可爱后辈，会尽己所能地悄悄帮助同伴，将大家的事情永远摆在第一位。极度害怕、情绪激动时会展现全然不同的一面，本人对此很苦恼也很抗拒。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        sbk: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        bsd: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/bsd.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/bsd.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        abl: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        hl: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        lwt: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/lwt.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/lwt.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        nad: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
        axl: {
          name: "https://skzy.ys4fun.com/main/pub_images/pc/character/name/gcl.svg",
          role: "https://skzy.ys4fun.com/main/pub_images/pc/character/pic/dgz.png",
          icon: "sakura",
          saying:
            "https://skzy.ys4fun.com/main/pub_images/pc/character/saying/gcl.png",
          desc: "雉小队成员，平日看上去有几分玩世不恭， 不过一旦开始战斗，睁开左眼的国常立就会一扫之前的慵懒，成为凌厉的出鞘利剑。",
          preview: "https://skzy.ys4fun.com/main/pub_images/pc/gif/gcl.gif",
        },
      },
    };
  },
  created() {
    this.setfactionActive(this.active);
  },
  methods: {
    setfactionActive(name) {
      this.active = name;
      this.currentCharacter = "";
      this.$nextTick(() => {
        this.currentCharacter = this.characterList[name][0];
      });
    },
    selectCharacter(name) {
      console.log(name);
      this.currentCharacter = "";
      this.$nextTick(() => {
        this.currentCharacter = name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.character-content {
  display: flex;

  .nav-box {
    position: relative;

    .faction-nav {
      height: 290px;
      width: 310px;
      position: relative;
      padding: 30px 0 30px 60px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      z-index: 100;

      &::before {
        content: "";
        background: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDczIDM3MiI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTJ7b3BhY2l0eTowLjQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ1LDM1NXYxSDE4VjIwSDQ1djFIMTlWMzU1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTMyLDYyaDd2MUgzMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMiwxMjNoN3YxSDMyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTMyLDE4MWg3djFIMzJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzIsMjQwaDd2MUgzMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMiwzMDRoN3YxSDMyWiIvPjwvc3ZnPg==)
          0 no-repeat;
        background-size: contain;
        height: 340px;
        width: 310px;
        position: absolute;
        top: 0;
        left: 0;
      }

      .nav-item {
        width: 214px;
        height: 46px;
        background-repeat: no-repeat;
        background-position: 50%;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 16px;

        &.yggdrasil {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-yggdrasil.dd6778b.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-yggdrasil-active.2818e56.png);
          }
          &:hover {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-yggdrasil-active.2818e56.png);
          }
        }

        &.sakura {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-sakura.8e9b40f.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-sakura-active.7c3b2f4.png);
          }
          &.hover {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-sakura-active.7c3b2f4.png);
          }
        }

        &.niro {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-niro.6771e4d.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-niro-active.6875684.png);
          }
          &.hover {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-niro-active.6875684.png);
          }
        }

        &.olympia {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-olympia.76d04a4.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-olympia-active.c675cb9.png);
          }
          &.hover {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-olympia-active.c675cb9.png);
          }
        }

        &.stars {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-stars.1b61009.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-stars-active.e6dcc37.png);
          }
          &.hover {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nav-stars-active.e6dcc37.png);
          }
        }
      }
    }

    .character-nav {
      position: relative;
      display: flex;
      justify-content: space-around;
      padding: 0 20px;
      margin-top: 60px;
      z-index: 100;

      .character-nav-item {
        width: 80px;
        height: 96px;
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        transition: all 0.3s;

        &.wrdd {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAABiCAMAAAD+1NpWAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFXRSTlMAWVIFTA8LGRQsIzQoHwhIRD1BMDnFLJmuAAAC1UlEQVRYw5VVW3arMAyU5CcGv4D9r/XepC6xjeXQ+SmnzBEjjUYBAKXgMdQBzxHNc+5Oz7ke9XMy5j8IRugQrBWciLo7e3ptIQhORPw8L4hIWfGTwKuKxh9sHNegK0+CsGBhJyHLw4YXAiuiPJwfLuem/X2TEb+LSLe6mZtaLiLkh7sJhqzQ//yp6sJ8EitWYP1YUYuq7B7RWMFOwoGRp0QkQpTH8TKO5SaHuJSyq1yBh8iIpJZqvGFCRtJNb7MUEoHHCtuEu+Ama+7OfF8A/NcaG25muMoY7xMmqrjsJLQGcLhjhaQYL8qOybqw5Knm1XtTWU+oCdeErWIx4usDvcYWBBAHY7ZaEiyI1E7CDzKqw2vPEmKKFRf8yGsNJ2rIOzbILx2DHXqJOy12iG4wY4cHiAVkw5SOOatOe1DUcO3Y4lfT2RhscDD7iARq97Kb7wjH+4u6DGwaDWVXxBNEoUxX2L4XBxT2EIO6oE7Cs1gxz5wSwSgcIA40BDBC04Ac7lwLoMKIe3dOeBdgaUh88IXTEBHp1zB3fUNwK5EKwYMrWY5m7PMCv96uEEoyLHfVtkIVAaDYrQVz0KgyYJkeS9dsl56tJeytr2l2AKldWje5U+qaVxn55Bd87Q/eymduo65xUT7DFpb9P5YhV/afDG+Xmd76tcrc8iz3rhXnHA1cSuOfmG10O8zwoIhxamkUozRu4xgUdsxO6Xs+A3vp0u1FZt30vUGCK1tenX3OHAArQnSJACaEnQhiw1J83u62s+t39k5ORMTGiJPlhqbSUtQzyPWuroyEqh31GVlJFd+drkamZ1x3GRVSLYHbifOTbP9FQ/lyxipU/FE0VyLsjGuvL8vbNeRTF5lD1KSucKkOJS9iK+nbYQ5VuveNBH59clkcDV8gf+w62inwzSmAleV24T3e5eMjLgHEJ1xN76md/Jb1dw3iW/Z3FSQPMElKDd8hAP4Bxo4Vnms5uNwAAAAASUVORK5CYII=);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/wrdd-active.2d0ad4c.png);
          }
        }

        &.te {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/te.edd23cb.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/te-active.c20decf.png);
          }
        }

        &.hdr {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/hdr.14bb839.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/hdr-active.b08384d.png);
          }
        }

        &.yd {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/yd.f3fe3c2.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/yd-active.9c1d761.png);
          }
        }

        &.gcl {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/gcl.137dd42.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/gcl-active.94f226f.png);
          }
        }

        &.dgz {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dgz.e7860cc.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dgz-active.e9c1818.png);
          }
        }

        &.xiu {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/xiu.abdbc1e.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/xiu-active.2fc3a7d.png);
          }
        }

        &.axls {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/axls.3909792.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/axls-active.c690d30.png);
          }
        }

        &.sbk {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/sbk.477c881.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/sbk-active.afdd1fe.png);
          }
        }

        &.bsd {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/bsd.395c066.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/bsd-active.555d782.png);
          }
        }

        &.abl {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/abl.2df2c0d.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/abl-active.39a875a.png);
          }
        }

        &.hl {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/hl.d8a2588.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/hl-active.f0937bb.png);
          }
        }

        &.lwt {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/lwt.e114576.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/lwt-active.5ce7116.png);
          }
        }

        &.nad {
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABiCAMAAAAlb3B0AAAAQlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACO4fbyAAAAFnRSTlNZAFMWNFAELkhMRAsIKSAPQDwcJBI5hRX5fwAAArpJREFUWMOV11dy5SAQBdAmChGE4v63OkN4YCVo3T+X67gJDUZA/sa6Y+GkkxPZKPyP9niyQQqVaDJCzoAlDH4ZscQVorBk+lxFqkI0luz088DIjF6xmiUCoSyaWBfEvGN3384iz507gyMa/mRAETjFIIilJ+L7xAs4hfdJFjVrj+xwDe2RCW5hHTLcydwmVsA9rEl46N75QsYmUXHDEWUqoY9E9arsNwJbu8oYTksNnUJlLl+IGWj8i5JWotLuCvZMZqDhgjyVWcIyhkxPRIbfuMuG6nKCuLmRNIIjXRcl9M/P7EZYurkvjXZI4keIERNj3oSRS84H+xsYWLJdVlheWntUWsTeg/Q/glp97X4Bz2GQzpeaABsBaXHV/I0M8CUuEPeJmEDWL0KRQPwXspVORscmovFiJok4PJkyGfBkjcQJwIdFYtblIwnB19l/RKOJz2T/0C6ZcLSgMhEJeEIywVcZI/nUZOpHHGCN/hFKseTIRIMoRFMM4QClyrxjqkwwOVE3t014JOHU7ONv2W2bDIFwkPWJfAQiaIeMoZatB4gZMr0TF8jpVS1Jp0u3QtzpsWveyVrIcnpSSfpKWCH0/D4c+4SVsr0qeyR1XIJ0ic/EXN6t9p2YTJZSNYW9CkEyubwNG1s5RlLHpfHEQwrvE5UJu76l1leiM5nLNnWnPydiIcf2qyyJuLKAfXIkom4vVvdKeCT+NLXORThEMtwJ7xBem6FvtkgMLePsz386rRj1lbD2wKwqRWqWZo8ZeCBb87zIJ2Ia80/k/oamzWt8SEssCUHMX0TCHr7wdPt1sT18rg7tlxLLnf9hYGte8OdFntnq3KDPd7J/+Ig6CqFDutqM90s5YiwVPMVzRRPJnZQdSYQ/f+FLM40PH6V5Lnn+9zg1jmphNzKVfUWlDgzUByKdFv/LezT5B61PF+ZuQIEgAAAAAElFTkSuQmCC);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/nad-active.a45279c.png);
          }
        }

        &.axl {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/axl.ab359e6.png);
          &.active {
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/axl-active.891f3f0.png);
          }
        }
      }

      .character-nav-prev {
        display: block;
        width: 18px;
        height: 25px;
        background-size: contain;
        position: absolute;
        top: 50%;
        margin-top: -12px;
        cursor: pointer;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ2cHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxNDYgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPlVudGl0bGVkIDI8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIzMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i566t5aS0LeW3piIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTQ1LjA5ODAzOSAyMDAgMTQ1LjA5ODAzOSAxNjQuODQxMjcgNTAuOTQzNzYyMSAxMDAgMTQ1LjA5ODAzOSAzNS4xNTg3MzAyIDE0NS4wOTgwMzkgMCAwIDEwMCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
        left: 0;
      }

      .character-nav-next {
        display: block;
        width: 18px;
        height: 25px;
        background-size: contain;
        position: absolute;
        top: 50%;
        margin-top: -12px;
        cursor: pointer;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQxcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxNDEgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPlVudGl0bGVkPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9Ii0xLjI0OTMwNTkxZS0xMiUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIzMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i566t5aS0LeWPsyIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDAgMzUuMTU4NzMwMiA5MS40OTUwNTQ5IDEwMCAwIDE2NC44NDEyNyAwIDIwMCAxNDEgMTAwIj48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
        right: 0;
      }
    }
  }
}
.icon {
  fill: #fff;
  height: 36px;
}

.title {
  color: #fff;
  font-size: 22px;
  font-weight: 700;
}
.character-box {
  height: 750px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    vertical-align: bottom;
  }
  .character-info {
    position: absolute;
    left: 400px;
    top: 50%;
    transform: translateY(-50%);

    .faction-icon {
      width: 330px;
      height: 320px;
      position: absolute;
      top: -200px;
      background-size: contain;
      background-position: 50%;
      opacity: 0.1;

      &.yggdrasil {
        background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ2IDQzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC43NiwyMi4zNGgwTDIwLjQ2LDI0aDBsNS45Myw1Ljg4Ljg1LS44NFYyNi4xOWwtOC45MS04LjgyLDAsMC0xLjc0LTEuNzJWOC40OWwtMS42OSwxLjY4djMuNzdsLTUuMDktNXYtNUw3LjcyLDZ2NC4ybDIuMTMsMi4wOUg1LjE4bC0xLjcsMS42OGg4LjA2TDEzLjY2LDE2SDMuOUwuNTEsMTkuNEgzLjlsMS4yOC0xLjI2aDkuMzNaTTIzLjg1LDkuNzVWMTcuM2wzLTIuOTRWMTFsMy4zOS0zLjM2SDM4LjdsLTIuMTItMi4xSDM0VjNMMzIuMzQsMS4zNXY0LjJIMjguMDlaTTE0LjUxLDM0LjUxSDlMNy4zLDM2LjE5djQuNjJMOSw0Mi40OVYzN2wuODUtLjg0aDcuMjFsLTEuMjcsMS4yNmgtMy40TDkuODUsNDB2Mi41MmwzLTIuOTRoNC42NmwzLjQtMy4zNiwzLjM5LDMuMzZoMi4xMmwuODUtLjg0LTguNDgtOC4zOVptNS4xLTI3LjI4djkuNkwyMiwxOS4xNmwuMTgtLjE4VjcuMjNsMy0yLjk0aDMuODJMMjcuMjQsM0gyMy40MkwyMC44OCw1LjU1LDE5LjYxLDQuMjksMjMuNDIuNTFIMjEuM2wtMywyLjk0aC0zTDE0LjA5LDQuNzFoM1pNNDEuMjUsMTFIMzEuOTFsLTMsMi45M2gwbC01LjA5LDVWMjFsMy4zOSwzLjM2VjIzLjE4bDMuNC0zLjM2SDM4LjdMMzcsMTguMTRIMjkuMzdsNS4wOS01aDYuMzZsNC42Nyw0LjYyVjE1LjJaTTI5LjM3LDM0LjUxbC0xLjI4LTEuMjVoMGwtOC40OC04LjQtLjg1LjgzaDB2Mi45NWw4LjEsOC0uNDctLjQ3SDM2LjU4djEuMjZsMS43LDEuNjhWMzUuNzdMMzcsMzQuNTFabS0xLjcsMi45NCwyLjEyLDIuMWg1LjA5bDMsMi45NFY0MGwtMi41NC0yLjUyWiIvPjwvc3ZnPg==);
      }
    }
    .name {
      position: relative;
      display: inline-block;
      padding-bottom: 5px;

      &::before {
        content: "";
        width: 100%;
        height: 15px;
        position: absolute;
        bottom: 5px;
        left: -5px;
        background-color: #ffae4e;
      }

      img {
        height: 44px;
        position: relative;
        margin-top: 40px;
      }
    }
    .desc-box {
      min-height: 180px;
      .desc {
        min-width: 400px;
        max-width: 490px;
        line-height: 1.6;
        background: rgba(65, 66, 88, 0.42);
        background: linear-gradient(
          90deg,
          transparent,
          rgba(65, 66, 88, 0.42) 8%,
          rgba(65, 66, 88, 0.42) 92%,
          transparent
        );
        padding: 15px 25px;
        margin-top: 15px;
        margin-left: 10px;
        color: #fff;
        font-size: 16px;
      }
    }
    .preview {
      margin-top: 10px;
      .title {
        font-size: 0;
        img {
          height: 26px;
        }
      }
      .video-box {
        margin-top: 16px;
        width: 192px;
        height: 108px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAABsBAMAAADOLKChAAAAIVBMVEVhYWlHRkhfX2ZKSkxdXGNNTVBQUFNbWmBYWF1TU1dWVVoEBgPcAAADYElEQVRo3uyN7anDMAxFtULIJMZoEuP9V3n3SI4fDqQQaP+0OVEk+erLtg/zHHgOPAe+4MBuO2yysu1buCIL0CmkQFQ1pY0XCblsBqnAQAaby+CYiYtRzzxfY3DZcuwBkrSUos9qNCwgqTbyC2L6TA6NemLaUdc9ufboU74cyicKLktZVeAxnvxgFSS/g8Ki0yqbGVehlNc3CxCvLrBpOfAJngN3D7gMd0l7WWK6uRMRMJ9lq44iCSdG5h4jTUTsTNOLUgFVnl8TfGqKrA+NUM07tHCxf749rFfpKMrx3n301Ww8g+S5DW/6G4K7jzrwjk79WChi3STS+T/RmQPhrd/F+y2s3+YnD/xxNwa2EcIwFM2SsEEsMQFsAOoAkcwEiafs/5iLOMSVipaqunc+2/nfxm3TRuYYEYQaAsDgC7mFBHwQGQoaaVppGqHOJUhu4Q8wGuRm/ECMDNLW7Hp82Ozp8M9cK33PNVU18sCt/N2BJBdI6RurIS1IuoBIB05Wg3aCn4qqdkqw529chZO6JEqJRTGrSYEwdWgZMLGcKFJI6NEKDQ3UXCccO2f5HNKRtd8P+tu83wHT2UzV5qIG1IoV9Za4NSPgzBxe8ZaTiKLzTAWVU9QehGJGsxisUtg4EElxC8GWzQpHVpVrNFbfdSsuB7uRNzkwHWGWvXp64iPDe1amLwhw85R3wMikfmIDP8jCLiOz3eMuaw7TKfmi54TpZ/zXA8Px8FibwZNPeq4eX0NVQ/+SaXztjTWdEcYtWPJaHwf0m4F+WFifPduKT3+2O3apEsMgFJasRMSVhEI2VOj2b475u5UwQ2FmnvygRj1HLV1fJg5sKSM5y0XHjmJfmeU5lQthlq7wfkDHWSmIlpRy4PNAN/oGDHRMW2ABDKV76PgyceDBgXwXFGErOeENpMumgogg6o6IZvRXqW2odtXmJYtiQLpNm6xCskOrTxz5pvuuSs7eZhXlhhqi863iRHrQgYjFOYe8DUBp9JLkU6hsIfkYcSAOdH5+IK30oZP/HWDIKcGCyNOOlmOKPGsW5tFhp+AA28qxHRmjBu0hMyW+/+0qmUaSoNAsAAnmiTBO3FbhQ9oESggVJkGLUWASTvThRat7uEY02R7EDRD2pPG8hO1gEARBEARBEDzhDxD19tb8zzOLAAAAAElFTkSuQmCC)
          50% no-repeat;
        position: relative;
        font-size: 0;
        .play-mask {
          display: none;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }
      }
    }
  }
}
</style>