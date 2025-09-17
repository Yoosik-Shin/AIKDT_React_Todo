# To Do List - Spring Boot
1. todos 테이블 생성 - SQL 파일에 작성되어있음
2. domain
    - Todos.java ( 엔터티 생성 )

3. mapper
    - BaseMapper.java
    - TodoMapper.xml
    - TodoMapper.java

4. service
    - BaseService.java
    - TodoService.java
    - TodoServiceImpl.java

5. controller
    - TodoController.java

6. Pagination
    - Pagination.java

7. OpenAPI Config
    - Swagger Config.java

8. Data Source
    - # 데이터 소스 - MySQL
        spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
        spring.datasource.url=jdbc:mysql://127.0.0.1:3306/aloha?serverTimezone=Asia/Seoul&allowPublicKeyRetrieval=true&useSSL=false&autoReconnection=true&autoReconnection=true
        spring.datasource.username=aloha
        spring.datasource.password=123456

9. MyBatis Config
    - # Mybatis 설정
        mybatis.configuration.map-underscore-to-camel-case=true
        mybatis.type-aliases-package=com.aloha.todo.domain
        mybatis.mapper-locations=classpath:mybatis/mapper/**/**.xml

10. HomeController.java
    - 🔗 / : (redirect) ➡ /swagger-ui/index.html

11. 로깅 레벨
# 로깅 레벨 
# - ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF
logging.level.root=DEBUG
logging.level.com.aloha.todo=DEBUG
