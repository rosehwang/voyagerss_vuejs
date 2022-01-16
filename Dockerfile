
# #ubuntu OS install
# FROM ubuntu:18.04
# MAINTAINER minssan9 <minssna9@gmail.com>
# # Install Nginx.
# RUN apt-get update
# RUN apt-get install -y nginx
# RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
# RUN chown -R www-data:www-data /var/lib/nginx
# # Define mountable directories.
# VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]
# #copy origin code to YOUR_DIRECTORY in the container
# WORKDIR /app
# COPY . .
#
# # Define working directory.
# WORKDIR /etc/nginx
# # Define default command.
# CMD ["nginx"]
# # Expose ports.
# EXPOSE 80
# EXPOSE 18180
# EXPOSE 443


#build stage
#pull node image
FROM node as build-stage
# 관리자 email
MAINTAINER minssan9 minssan9@gmail.com
#working directory
WORKDIR /app
#add all files from local to docker
ADD . .
#install by node all dependancies
RUN npm install
#build by node  output dir -> docker/dist
RUN npm run build
# ------ node install & build vuejs project


#production stage
#pull image nginx
FROM nginx as production
#copy from build output dir -> docker nginx dir
COPY dist/                /usr/share/nginx/html/
#copy from this project etc/nginx/conf -> docker nginx dir
COPY etc/nginx/nginx.conf /etc/nginx/
#copy from this project etc/nginx/conf -> docker nginx dir
COPY etc/nginx/conf.d     /etc/nginx/conf.d/
# Define mountable directories.
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

# Define working directory.
WORKDIR /etc/nginx

# Open HTTP port for nginx
EXPOSE 80
EXPOSE 18180
EXPOSE 443
#run nginx -g : global directice  daemon off : foreground
#-g global디렉티스설정	지정한 global디렉티브의 설정으로 nginx를 기동 (부하실험등...)
CMD ["nginx", "-g", "daemon off;"]
















