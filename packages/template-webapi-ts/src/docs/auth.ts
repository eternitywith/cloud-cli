/**
 *  @openapi
 *  components:
 *    schemas:
 *      AccessToken:
 *        type: string
 *        description: 能够代表身份认证的JWT格式的access_token，将该token放入authorization bearer后即可请求后台资源。
 *        default: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ0YjMwMjFhZjhhNDE0YjcwYzU3Yzk5YmExYjkzY2Q0ZmM2NTI2NzkifQ.eyJpc3MiOiIvYXV0aG4iLCJzdWIiOiJDaUF6T1RWaE5ERTVaV05oWkdZNVlqQmxNREkwT1daaU1HUXdOMll6T0dFMk5oSUdZWEZ5YjNObCIsImF1ZCI6ImNsb3Vkd2ViIiwiZXhwIjoxNjU2NTY5NjY2LCJpYXQiOjE2NTY1Njk2MDYsImF0X2hhc2giOiJPMGt5VEFsdXFxV0FuZ0lwMGM2MXZnIiwiZW1haWwiOiJndWlzaHVpLmdhb0BhcXJvc2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInVzZXJfaWQiOiIzOTVhNDE5ZWNhZGY5YjBlMDI0OWZiMGQwN2YzOGE2NiIsIm5hbWUiOiJndWlzaHVpLmdhbyJ9.GNsz2YzfNv-rIvUamFu8EVybsab9wkF57M_xZmccfe8nTUiT2qAsAI4iN_YuoMOUk_UhhYLqwSQJeRrB30jcwV2MQ4quVV-nD4O0cfJESBn6foI59ltomRg2Sov3PUlZA-FYaQptKXHW-gFxMKU8A8H-WwKBUX8oeKIRV1zMQqtGjx1yKaLmaBzsePi4Fc0wlUJwWsb3zYhuCk__S03E1eWeWdl0fcn8n69DyVS3W9yoraCxDf3SfG7sa5-mIhPdV-TRljz228ha74X3cnl0vSNy9nQQppmk9pnamA3TFzVbazwB4F12MTJ_e_RNTKg1T5QChqvjLL3BN4qszwvcMg"
 *      IdToken:
 *        type: string
 *        description: OIDC中的IdToken，在我们的服务中没有用到。
 *        default: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ0YjMwMjFhZjhhNDE0YjcwYzU3Yzk5YmExYjkzY2Q0ZmM2NTI2NzkifQ.eyJpc3MiOiIvYXV0aG4iLCJzdWIiOiJDaUF6T1RWaE5ERTVaV05oWkdZNVlqQmxNREkwT1daaU1HUXdOMll6T0dFMk5oSUdZWEZ5YjNObCIsImF1ZCI6ImNsb3Vkd2ViIiwiZXhwIjoxNjU2NTY5NjY2LCJpYXQiOjE2NTY1Njk2MDYsImF0X2hhc2giOiJPMGt5VEFsdXFxV0FuZ0lwMGM2MXZnIiwiZW1haWwiOiJndWlzaHVpLmdhb0BhcXJvc2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInVzZXJfaWQiOiIzOTVhNDE5ZWNhZGY5YjBlMDI0OWZiMGQwN2YzOGE2NiIsIm5hbWUiOiJndWlzaHVpLmdhbyJ9.GNsz2YzfNv-rIvUamFu8EVybsab9wkF57M_xZmccfe8nTUiT2qAsAI4iN_YuoMOUk_UhhYLqwSQJeRrB30jcwV2MQ4quVV-nD4O0cfJESBn6foI59ltomRg2Sov3PUlZA-FYaQptKXHW-gFxMKU8A8H-WwKBUX8oeKIRV1zMQqtGjx1yKaLmaBzsePi4Fc0wlUJwWsb3zYhuCk__S03E1eWeWdl0fcn8n69DyVS3W9yoraCxDf3SfG7sa5-mIhPdV-TRljz228ha74X3cnl0vSNy9nQQppmk9pnamA3TFzVbazwB4F12MTJ_e_RNTKg1T5QChqvjLL3BN4qszwvcMg"
 *      RefreshToken:
 *        type: string
 *        description: token过期时使用该refresh_token即可置换一个新的access_token
 *        default: "ChlzamFpZXJ2Znl4cHdnZ2gzdGhybWplandvEhl3bGRienQ1a2JhdXJ0cXlmdzVmaHRja2ll"
 *      ClientId:
 *        type: string
 *        description: OAuth2客户端标识符，该值需要在授权服务器上注册后有效，web服务的值为cloudweb，desktop的值为cloudclient。
 *        default: cloudweb
 *      Scope:
 *        type: string
 *        description: 申请的权限范围，其值必须包含openid，否则OIDC无法理解该行为。/n/n offline_access用于获取刷新令牌refresh_token。/n/n email、profile、groups为可选字段，传入此字段则可以在认证成功后返回的access_token中解析一些用户信息。
 *        default: 2b976af0e6b6ceea2b1554aa31d1fe94ea692cd9
 *      TokenType:
 *        type: string
 *        description: OAuth2令牌类型值
 *        default: bearer
 *      RedirectUri:
 *        type: string
 *        description: 想要跳转到的客户端注册的跳转地址
 *        default: /login-redirect
 *      Force:
 *        type: boolean
 *        description: 是否强制登录
 *        default: false
 *
 */
