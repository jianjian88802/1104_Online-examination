const base = {
    get() {
        return {
            url : "http://localhost:8080/javazaixiankaoshi/",
            name: "javazaixiankaoshi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/javazaixiankaoshi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线考试系统"
        } 
    }
}
export default base
