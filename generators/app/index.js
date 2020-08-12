const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    promiting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }

    writing () {
        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            '.gitignore',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/App.vue',
            'src/main.js',
            'src/router.js'
        ]
        templates.map(item => {
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answers)
        })
    }
}