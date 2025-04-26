# 1. Use an Nginx base image
FROM nginx:alpine

# 2. Copy your build folder to the Nginx html directory
COPY build/ /usr/share/nginx/html

# 3. (Optional) Expose port 80 (default for Nginx)
EXPOSE 80

# 4. Nginx will automatically start when the container runs, so no CMD is necessary.