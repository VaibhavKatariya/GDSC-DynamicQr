var timer = 0
setInterval(() => {
  timer = timer + 1
}, 1000)
console.log(timer)

const redirect = () => {
  console.log(window.location.search);

  if (window.location.search == ""){

    window.location.replace(
      'https://gdsc-jiit128.tech/bitbox',
    )
    return;

  } else if (window.location.search == "?hunt=sahil"){

    window.location.replace(
      'https://github.com/Sandhu-Sahil',
    )
    return;

  } else if (window.location.search == "?hunt=vishesh"){

    window.location.replace(
      'https://github.com/entropyconquers',
    )
    return;

  } else if (window.location.search == "?hunt=tanay"){

    window.location.replace(
      'https://github.com/TanayK07',
    )
    return;

  } else if (window.location.search == "?hunt=sanat"){

    window.location.replace(
      'https://instagram.com/sanatbhatia?igshid=YmMyMTA2M2Y=',
    )
    return;

  } else if (window.location.search == "?hunt=entry"){

    window.location.replace(
      'https://gdsc-jiit128.tech/bitbox-validation',
    )
    return;

  } else if (window.location.search == "?hunt=CrypticHunt"){

    window.location.replace(
      'https://media.tenor.com/rQvNxF5JMbYAAAAM/dog-slap.gif',
    )
    return;

  }

  // window.location.replace(
  //   'https://gdsc.community.dev/e/m6ctmp/',
  // ) 
}

setTimeout(() => {
  redirect()
}, 5633)
