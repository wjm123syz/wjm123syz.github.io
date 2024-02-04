// 获取图片列表元素
const portfolioList = document.getElementById('portfolioList');

// 定义图片数组
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// 当前显示的图片索引
let currentIndex = 0;

// 图片切换函数
function switchImage() {
  // 隐藏所有图片
  portfolioList.innerHTML = '';
  
  // 显示当前图片
  const imgElement = document.createElement('img');
  imgElement.src = images[currentIndex];
  imgElement.alt = 'Image ' + (currentIndex + 1);
  imgElement.classList.add('portfolioImage'); // 添加样式类（如果需要）
  portfolioList.appendChild(imgElement);
  
  // 递增索引，如果超过图片数组长度，则回到数组的开头
  currentIndex = (currentIndex + 1) % images.length;
}

// 每3秒切换一次图片
setInterval(switchImage, 3000);