const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");

function auth(req, res, next) {
    const token = req.cookies.token;
    // Если токена нет, просто пропускаем дальше (или возвращаем ошибку)
    if (!token) {
        console.log("Токен отсутствует");
        return res.status(401).json({ error: "Не авторизован" });
    }
    
    try {
        const verifyResult = jwt.verify(token, JWT_SECRET);
        console.log("Токен верифицирован:", verifyResult);
        req.user = verifyResult; // Сохраняем данные пользователя в запросе
        
        next();
    } catch (error) {
        console.log("Ошибка верификации токена:", error.message);
        // Очищаем недействительный токен
        res.clearCookie("token");
        return res.status(401).json({ error: "Недействительный токен" });
    }
}

module.exports = { auth };