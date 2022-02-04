https://tailwindcss.com/docs/guides/nextjs


1.npm i styled-components twin.macro
#ref https://www.npmjs.com/package/twin.macro
#ref https://www.npmjs.com/package/styled-components

2.npm i babel-plugin-styled-components babel-plugin-twin
##ref https://www.npmjs.com/package/babel-plugin-styled-components
##ref https://www.npmjs.com/package/babel-plugin-twin

3.set up _document.js
##ref https://nextjs.org/docs/advanced-features/custom-document
##ref https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js

4.create file .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    ["styled-components", { "ssr": true }],
    ["babel-plugin-twin", { "debug": true }],
    "babel-plugin-macros"
  ]
}


5. add cuss to global
@tailwind base;
@tailwind components;
@tailwind utilities;

ref youtube : https://www.youtube.com/watch?v=do3LSqK929Q&t=592s

6.
#Ref https://www.mindphp.com/%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C/%E0%B8%AA%E0%B8%AD%E0%B8%99-javascript/2747-%E0%B8%9A%E0%B8%97%E0%B8%97%E0%B8%B5%E0%B9%88-8-javascript-objects.html
-1. build image file  จาก Dockerfile
$ docker build -t <ImageName> <FolderOfDocker>
ex.1 folder Dockerfile อยู่ที่ folderDocker
$ docker build -t test-next-docker folderDocker

ex.2 **เราใช้ foler doker อยู่ที่ root
$ docker build -t dokcer123 .

-2.สร้าง Container จาก Image ข้อ1
$ docker run -p 3000:3000 --name <Name_of_Docker> <NameOfImage or IDImage>
ex.  docker run -p 3000:3000 --name Docker-Nextjs dokcer123
 3000 ตัวแรก คือ port ที่มาจากเครื่องเรา
 3000 ตัว หลังคือ port ของ Docker ที่รัน

 -3 ดู docker ทั้งหมด
 1.docker container ls  *ไม่แค่ที่รัน
 2.docker container ps  **เอาทั้งหมด ที่ stop แล้วก็เอา

 -4 ดูไฟล์ข้างใน Docker
 docker exec -it <IdContainer> sh
 ex. docker exec -it 43231c19d0e4 sh
 ls => cd public =>cd .next =>ls

-----------------------------
1.ลงโปรแกรม PuTTYgen แล้ว gen จากไฟล์ pem
ได้ ไฟล์ .ppy มาใช้

.linux
1.Docker deny ( dial unix /var/run/docker.sock: connect: permission denied)
$ sudo chmod 666 /var/run/docker.sock
#REF https://stackoverflow.com/questions/51342810/how-to-fix-dial-unix-var-run-docker-sock-connect-permission-denied-when-gro

2.คำสั่ง linux
https://github.com/soumilshah1995/Deploy-Docker-Container-on-AWS

sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-get install docker-ce docker-ce-cli containerd.io
apt-cache madison docker-ce
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo apt install docker.io
sudo apt install docker-compose

3.ลงโปรแกรม FileZilla เพื่อ อัพfile จากเครื่องไป linux
-config ดังนี้
3.1 host เอามาจาก instance ec2
sftp://ec2-18-141-142-6.ap-southeast-1.compute.amazonaws.com

3.2port เป็น 22
3.3 user: ubuntu
3.4 set key
 - 1 ไปที่ Edit
 - 2 Connection
 - 3 SFTP
 - 4 Add Key file ที่ได้จากโปรแกรม PuTTYgen ที่เกิดจาก load ไฟล์ .pem ที่ได้จาก ตอนสร้าง instance จากนั้น save file จะได้ ไฟล์ .ppk







