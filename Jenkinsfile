
node {
    stage('Checkout SCM') {
        git branch: 'jenkins-test', url: 'https://github.com/ajay-jagtap/ngx-bs-modal.git'
    }

    stage('Install node nodules') { 
        bat 'npm install'
    }

    // stage('Test'){
    //     bat 'npm run test'
    // }

    stage('Build Common Controls') {
        bat 'npm run build ngx-bs-modal'
    }

    stage('Build Project') {
        bat "npm run build-prod"
    }

    stage('Push to Github') {
        bat 'git config --global user.email "ajayjagtap.10@gmail.com"'
        bat 'git config --global user.name "ajay-jagtap"'
        bat 'git config --global user.password "Ajayjagtap@123"'
        bat 'copy C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\jenkins-test\\dist\\ngx-bs-modal-demo\\ C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\jenkins-test'

        // bat 'cd dist/ngx-bs-modal-demo'
        bat 'git checkout  -f gh-pages'
        bat 'git pull'
        // bat 'rmdir dist /s'
        // bat 'rmdir node_modules /s'
        // bat 'git add dist/ngx-bs-modal-demo'
        bat 'git add .'
        // bat 'git reset -- node_modules/*'
        // bat 'git reset -- dist/*'
        // bat 'git reset --hard'
        bat 'git commit -m "Pushed changes form jenkins"'
        bat 'git push'
    }
}