function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
   ./public/male0001.png
./public/male0002.png
./public/male0003.png
./public/male0004.png
./public/male0005.png
./public/male0006.png
./public/male0007.png
./public/male0008.png
./public/male0009.png
./public/male0010.png
./public/male0011.png
./public/male0012.png
./public/male0013.png
./public/male0014.png
./public/male0015.png
./public/male0016.png
./public/male0017.png
./public/male0018.png
./public/male0019.png
./public/male0020.png
./public/male0021.png
./public/male0022.png
./public/male0023.png
./public/male0024.png
./public/male0025.png
./public/male0026.png
./public/male0027.png
./public/male0028.png
./public/male0029.png
./public/male0030.png
./public/male0031.png
./public/male0032.png
./public/male0033.png
./public/male0034.png
./public/male0035.png
./public/male0036.png
./public/male0037.png
./public/male0038.png
./public/male0039.png
./public/male0040.png
./public/male0041.png
./public/male0042.png
./public/male0043.png
./public/male0044.png
./public/male0045.png
./public/male0046.png
./public/male0047.png
./public/male0048.png
./public/male0049.png
./public/male0050.png
./public/male0051.png
./public/male0052.png
./public/male0053.png
./public/male0054.png
./public/male0055.png
./public/male0056.png
./public/male0057.png
./public/male0058.png
./public/male0059.png
./public/male0060.png
./public/male0061.png
./public/male0062.png
./public/male0063.png
./public/male0064.png
./public/male0065.png
./public/male0066.png
./public/male0067.png
./public/male0068.png
./public/male0069.png
./public/male0070.png
./public/male0071.png
./public/male0072.png
./public/male0073.png
./public/male0074.png
./public/male0075.png
./public/male0076.png
./public/male0077.png
./public/male0078.png
./public/male0079.png
./public/male0080.png
./public/male0081.png
./public/male0082.png
./public/male0083.png
./public/male0084.png
./public/male0085.png
./public/male0086.png
./public/male0087.png
./public/male0088.png
./public/male0089.png
./public/male0090.png
./public/male0091.png
./public/male0092.png
./public/male0093.png
./public/male0094.png
./public/male0095.png
./public/male0096.png
./public/male0097.png
./public/male0098.png
./public/male0099.png
./public/male0100.png
./public/male0101.png
./public/male0102.png
./public/male0103.png
./public/male0104.png
./public/male0105.png
./public/male0106.png
./public/male0107.png
./public/male0108.png
./public/male0109.png
./public/male0110.png
./public/male0111.png
./public/male0112.png
./public/male0113.png
./public/male0114.png
./public/male0115.png
./public/male0116.png
./public/male0117.png
./public/male0118.png
./public/male0119.png
./public/male0120.png
./public/male0121.png
./public/male0122.png
./public/male0123.png
./public/male0124.png
./public/male0125.png
./public/male0126.png
./public/male0127.png
./public/male0128.png
./public/male0129.png
./public/male0130.png
./public/male0131.png
./public/male0132.png
./public/male0133.png
./public/male0134.png
./public/male0135.png
./public/male0136.png
./public/male0137.png
./public/male0138.png
./public/male0139.png
./public/male0140.png
./public/male0141.png
./public/male0142.png
./public/male0143.png
./public/male0144.png
./public/male0145.png
./public/male0146.png
./public/male0147.png
./public/male0148.png
./public/male0149.png
./public/male0150.png
./public/male0151.png
./public/male0152.png
./public/male0153.png
./public/male0154.png
./public/male0155.png
./public/male0156.png
./public/male0157.png
./public/male0158.png
./public/male0159.png
./public/male0160.png
./public/male0161.png
./public/male0162.png
./public/male0163.png
./public/male0164.png
./public/male0165.png
./public/male0166.png
./public/male0167.png
./public/male0168.png
./public/male0169.png
./public/male0170.png
./public/male0171.png
./public/male0172.png
./public/male0173.png
./public/male0174.png
./public/male0175.png
./public/male0176.png
./public/male0177.png
./public/male0178.png
./public/male0179.png
./public/male0180.png
./public/male0181.png
./public/male0182.png
./public/male0183.png
./public/male0184.png
./public/male0185.png
./public/male0186.png
./public/male0187.png
./public/male0188.png
./public/male0189.png
./public/male0190.png
./public/male0191.png
./public/male0192.png
./public/male0193.png
./public/male0194.png
./public/male0195.png
./public/male0196.png
./public/male0197.png
./public/male0198.png
./public/male0199.png
./public/male0200.png
./public/male0201.png
./public/male0202.png
./public/male0203.png
./public/male0204.png
./public/male0205.png
./public/male0206.png
./public/male0207.png
./public/male0208.png
./public/male0209.png
./public/male0210.png
./public/male0211.png
./public/male0212.png
./public/male0213.png
./public/male0214.png
./public/male0215.png
./public/male0216.png
./public/male0217.png
./public/male0218.png
./public/male0219.png
./public/male0220.png
./public/male0221.png
./public/male0222.png
./public/male0223.png
./public/male0224.png
./public/male0225.png
./public/male0226.png
./public/male0227.png
./public/male0228.png
./public/male0229.png
./public/male0230.png
./public/male0231.png
./public/male0232.png
./public/male0233.png
./public/male0234.png
./public/male0235.png
./public/male0236.png
./public/male0237.png
./public/male0238.png
./public/male0239.png
./public/male0240.png
./public/male0241.png
./public/male0242.png
./public/male0243.png
./public/male0244.png
./public/male0245.png
./public/male0246.png
./public/male0247.png
./public/male0248.png
./public/male0249.png
./public/male0250.png
./public/male0251.png
./public/male0252.png
./public/male0253.png
./public/male0254.png
./public/male0255.png
./public/male0256.png
./public/male0257.png
./public/male0258.png
./public/male0259.png
./public/male0260.png
./public/male0261.png
./public/male0262.png
./public/male0263.png
./public/male0264.png
./public/male0265.png
./public/male0266.png
./public/male0267.png
./public/male0268.png
./public/male0269.png
./public/male0270.png
./public/male0271.png
./public/male0272.png
./public/male0273.png
./public/male0274.png
./public/male0275.png
./public/male0276.png
./public/male0277.png
./public/male0278.png
./public/male0279.png
./public/male0280.png
./public/male0281.png
./public/male0282.png
./public/male0283.png
./public/male0284.png
./public/male0285.png
./public/male0286.png
./public/male0287.png
./public/male0288.png
./public/male0289.png
./public/male0290.png
./public/male0291.png
./public/male0292.png
./public/male0293.png
./public/male0294.png
./public/male0295.png
./public/male0296.png
./public/male0297.png
./public/male0298.png
./public/male0299.png
./public/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
