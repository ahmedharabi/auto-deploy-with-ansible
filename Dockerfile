FROM ubuntu:latest
RUN apt update && apt install -y ansible openssh-client sshpass
WORKDIR /app
COPY app/ ./app/
COPY ansible/ ./ansible/
CMD ["/bin/bash"]
