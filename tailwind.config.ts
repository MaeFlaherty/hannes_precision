import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['HK Grotesk', ...fontFamily.sans],
      },
	  backgroundImage: {
        'screw-machine': "url('/public/screw_machine.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
