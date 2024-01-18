new Vue({
  el: "#app",
  data: {
    selectOne: 0,
    placeholder: "mani",
    url: "https://www.zoho.com/index1.html",
    selectedFrame: { width: "1366px", height: "100%" },
    desktop: [
      {
        id: 1,
        name: "2560x1440",
        width: 2560,
        height: "100%",
      },
      {
        id: 2,
        name: "1920x1200",
        width: 1920,
        height: "100%",
      },
      {
        id: 3,
        name: "1680x1050",
        width: 1680,
        height: "100%",
      },
      {
        id: 4,
        name: "1600x1200",
        width: 1600,
        height: "100%",
      },
      {
        id: 5,
        name: "1400x900",
        width: 1400,
        height: "100%",
      },
      {
        id: 6,
        name: "1366x780",
        width: 1366,
        height: "100%",
      },
      {
        id: 7,
        name: "1280x1024",
        width: 1280,
        height: "100%",
      },
      {
        id: 8,
        name: "1280x768",
        width: 1280,
        height: "100%",
      },
      {
        id: 9,
        name: "1152x864",
        width: 1152,
        height: "100%",
      },
      {
        id: 10,
        name: "1024x768",
        width: 1024,
        height: "100%",
      },
      {
        id: 11,
        name: "800x600",
        width: 800,
        height: "100%",
      },
    ],
    tab: [
      {
        id: 1,
        name: "768x1024",
        width: 768,
        height: "100%",
        deviceName: "iPad",
      },
      {
        id: 2,
        name: "1024x1366",
        width: 1024,
        height: "100%",
        deviceName: "iPad Pro",
      },
      {
        id: 3,
        name: "800x1280",
        width: 800,
        height: "100%",
        deviceName: "Nexus 10",
      },
      {
        id: 4,
        name: "600x960",
        width: 600,
        height: "100%",
        deviceName: "Nexus 7",
      },
    ],
    mobile: [
      {
        id: 1,
        name: "360x598",
        width: 360,
        height: "100%",
        deviceName: "Nexus 5",
      },
      {
        id: 2,
        name: "412x684",
        width: 412,
        height: "100%",
        deviceName: "Nexus 5X",
      },
      {
        id: 3,
        name: "414x376",
        width: 414,
        height: "100%",
        deviceName: "iPhone 6 +",
      },
      {
        id: 4,
        name: "375x667",
        width: 375,
        height: "100%",
        deviceName: "iPhone 6",
      },
      {
        id: 5,
        name: "320x568",
        width: 320,
        height: "100%",
        deviceName: "iPhone 5",
      },
      {
        id: 6,
        name: "320x480",
        width: 320,
        height: "100%",
        deviceName: "iPhone 4",
      },
    ],
    bootsrap: [
      {
        id: "",
        name: "Boostrap 5",
      },
      {
        id: 1,
        name: "XXL - 1400x900",
        width: 1400,
        height: "100%",
        deviceName: "[>=1400]",
      },
      {
        id: 2,
        name: "XL - 1200x900",
        width: 1200,
        height: "100%",
        deviceName: "[1200-1399]",
      },
      {
        id: 3,
        name: "LG - 992x700",
        width: 992,
        height: "100%",
        deviceName: "[991-1199]",
      },
      {
        id: 4,
        name: "MD - 768x700",
        width: 768,
        height: "100%",
        deviceName: "[768-991]",
      },
      {
        id: 5,
        name: "SM - 576x700",
        width: 576,
        height: "100%",
        deviceName: "(576-767)",
      },
      {
        id: 6,
        name: "XS - 575x700",
        width: 575,
        height: "100%",
        deviceName: "[0-575]",
      },
      {
        id: "",
        name: "Element -UI",
      },
      {
        id: 7,
        name: "XL - 1920x1080",
        width: 1920,
        height: "100%",
        deviceName: "[> 1920]",
      },
      {
        id: 8,
        name: "LG - 1200x1080",
        width: 1200,
        height: "100%",
        deviceName: "[1200-1919]",
      },
      {
        id: 9,
        name: "MD - 992",
        width: 992,
        height: "100%",
        deviceName: "[992-1199]",
      },
      {
        id: 10,
        name: "SM - 768",
        width: 768,
        height: "100%",
        deviceName: "[768-991]",
      },
      {
        id: 11,
        name: "XS - 767",
        width: 767,
        height: "100%",
        deviceName: "[0 - 767 ]",
      },
    ],
  },
  methods: {
    onDesktopChange() {
      this.selectedFrame.width = this.selectOne.width;
      this.selectedFrame.height = this.selectOne.height;
    },
    onTabChange() {
      this.selectedFrame.width = this.selectOne.width;
      this.selectedFrame.height = this.selectOne.height;
    },
    onMobileChange() {
      this.selectedFrame.width = this.selectOne.width;
      this.selectedFrame.height = this.selectOne.height;
    },
  },
});
