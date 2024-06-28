import { extendTheme } from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.90) translateY(-20px)",
  color: "#ff7900",
};
const activeInputStyles = {
  borderColor: "#ff7900",
};
const theme = extendTheme({
  // Your theme customizations go here
  fonts: {
    body: `"Helvetica Neue",Helvetica,Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","HelveticaNeueLTStd-Bd"`,
  },
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          // bgImage: 'url("gana.png"), url("/wall/gazon.png")',
          // bgRepeat: 'no-repeat',
          // bgSize: 'contain',
          // bgPosition: 'bottom',
          // height: '80%',
          // width: '100%',
          // bgPosition: ' center',
        },
      }),
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
              input: {
                ...activeInputStyles,
              },
            },
            "input:not(:placeholder-shown) + label, input:-webkit-autofill ~ label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeInputStyles,
              },
            label: {
              top: "-5px",
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              colors: "#ccc",
              mx: 3,
              px: 1,
              my: 2,
            },
            Input: {
              height: "60px",
              borderColor: "#ccc",
              colors: "#ccc",
              mb: "30px",
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f5f5f5",
      },
      small: {
        fontSize: "10px",
      },
      ".container": {
        maxWidth: "1320px",
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
  },
  dimensions: {
    desktop: "(min-width: 1080px)",
    tablet: "(max-width: 1079px)",
    mobile: "(min-width: 768px)",
  },
  btnBannerDim: {
    width: "12em",
    height: "3.2em",
  },
  btnBannerDimmobile: {
    width: "10em",
    height: "2.8em",
  },
  colors: {
    transparent: "transparent",
    orange: "#ff7900",
    rose: "#ff3496",
    red: "#ff0000",
    nightOrange: "#331800",
    orangeAlpha: "#ffe4cc",
    // gray: "#707070",
    grayAplha: "rgba(255, 255, 255, 0.1)",
    gray100: "rgba(0, 0, 0, 0.05)",
    gray200: "#666",
    gray900: "#ddd",
    black: "#000",
    green: "#107136",
    green100: "#13fb00",
    yellow: "#fbc100",
    purple: "#4d2793",
    blue: "#085ebd",
    blueClair: "#4bb4e6",
    greenAlpha: "#b8ebd6",
    darkGreen: "#50be87",
    yellowAlpha: "#fff6b6",
    purpleAlpha: "#d9c2f0",
    pink: "#fff2e6",
    blueAlpha: "#b5e8f7",
    white: "#fff",
    whiteAlpha: "whiteAlpha.100",
  },
  gradients: {
    black: "linear-gradient(to left, rgba(0, 0, 0, 0), #000)",
    blackAlpha: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000)",
    blackLight: "linear-gradient(to left, rgba(0, 0, 0, 0), #1f1f1f)",
    blackLightAlpha: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000)",
    orange:
      "linear-gradient(to bottom, #ff7900, #ffd2a9), linear-gradient(to bottom, #b5ecff, #b5ecff)",
    greenOverlay:
      "linear-gradient(to right, #b8ebd6 50%, rgba(184, 235, 214, 0) 100%)",
    greenOverlayAlpha:
      "linear-gradient(to right, #b8ebd6, rgba(184, 235, 214, 0) 100%)",
    yellowOverlay:
      "linear-gradient(to right, #fff6b6 50%, rgba(255, 246, 182, 0) 100%)",
    yellowOverlayAlpha:
      "linear-gradient(to right, #fff6b6, rgba(255, 246, 182, 0) 100%)",
    purpleOverlay:
      "linear-gradient(to right, #d9c2f0 50%, rgba(217, 194, 240, 0) 100%)",
    purpleOverlayAlpha:
      "linear-gradient(to right, #d9c2f0, rgba(217, 194, 240, 0) 100%)",
    blueOverlay:
      "linear-gradient(to right, #b5e8f7 50%, rgba(181, 232, 247, 0) 100%)",
    blueOverlayAlpha:
      "linear-gradient(to right, #b5e8f7, rgba(181, 232, 247, 0) 100%)",
    white:
      "linear-gradient(to right, #fff 40%, rgba(255, 255, 255, 0.05) 100%)",
    rose: "radial-gradient(circle, rgba(238,174,202,1) 0%, #b4d1ff 100%)",
  },
});

export default theme;
