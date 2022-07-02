const { NodeSSH } = require("node-ssh");
class AutoUploadPlugin {
  constructor(options) {
    this.ssh = new NodeSSH();
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "AutoUploadPlugin",
      async (compilation, callback) => {
        console.log("内容已经到达服务器");
        // 1.获取输出的文件夹
        const outputPath = compilation.outputOptions.path;
        console.log(outputPath);
        // 2.连接服务器 ssh
        await this.connectServer();
        // 3. 上传文件到服务器
        // 3.1 删除原目录中的文件
        const serverDir = this.options.serverDir;
        await this.ssh.execCommand(`rm -rf ${serverDir}/*`);
        // 3.2 上传文件到服务器目录
        await this.uploadFiles(outputPath, serverDir);
        // 4. 关闭ssh
        this.ssh.dispose();
        callback();
      }
    );
  }
  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password,
    });
    console.log("连接成功！");
  }
  async uploadFiles(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      recursive: true,
      concurrency: 10,
    });
    console.log(status);
  }
}
module.exports = AutoUploadPlugin;
