const themes = {
    dark: [
        ['--bg', 'rgb(9, 9, 11)'],
        ['--text', 'rgb(250, 250, 250)'],
        ['--bgSec', 'rgb(39 39 42)'],
        ['--textSec', 'rgb(244, 244, 245)']
    ],
    light: [
        ['--bg', 'rgb(250, 250, 250)'],
        ['--text', 'rgb(9, 9, 11)'],
        ['--bgSec', 'rgb(212 212 216)'],
        ['--textSec', 'rgb(24, 24, 27)'],
    ],
}

export default function (isDarkMode){
    if(!isDarkMode){
       (themes.dark).forEach(e => {
            document.documentElement.style.setProperty(e[0], e[1]);
        })
    } else {
        (themes.light).forEach(e => {
            document.documentElement.style.setProperty(e[0], e[1]);
        })
    }
}