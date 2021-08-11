const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
// vue.config.js 常⽤配置
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            //设置“src”目录别名为“@”
            .set("@", resolve("src"))
        // .set("views", resolve("src/views"))
        //     .set('components',resolve('./src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    }
}