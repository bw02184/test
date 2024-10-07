# 이미지 빌드 과정에서 애플리케이션 빌드를 포함하여 작성하는 경우

# 빌드 과정에서 컴파일이 필요하기 때문에 jdk로 설치
FROM eclipse-temurin:17-jdk-alpine as builder
WORKDIR /usr/src/backend/app
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew clean build

# --- Application 실행 스크립트 ---
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app/backend

COPY --from=builder /usr/src/backend/app/build/libs/*.jar app.jar

ENTRYPOINT [ "java", "-jar", "/app/backend/app.jar" ]