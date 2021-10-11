
node {
    // stage('Checkout SCM') {
    //     git branch: 'jenkins-test', url: 'https://github.com/ajay-jagtap/ngx-bs-modal.git'
    // }

    stage('Checkout SCM') {
        bat 'git status'
        bat 'git pull'
        // bat 'git pull origin jenkins-test'
        bat 'git status'
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
        bat 'rmdir C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup /s /q'
        bat 'mkdir C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup'
        bat 'copy C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\jenkins-test\\dist\\ngx-bs-modal-demo\\ C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup'

        // bat 'F:'
        // bat 'cd F:\\Angular\\ngx-bs-modal\\Angular11'
        // bat 'git stash -u'
        // bat 'git checkout  -f gh-pages'
        // bat 'git pull'
        // bat 'git status'

        // bat 'rmdir F:\\Angular\\ngx-bs-modal\\Angular11\\dist\\ngx-bs-modal-demo /s /q'
        // bat 'mkdir F:\\Angular\\ngx-bs-modal\\Angular11\\dist\\ngx-bs-modal-demo'
        // bat 'copy C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup\\ F:\\Angular\\ngx-bs-modal\\Angular11\\dist\\ngx-bs-modal-demo'


        // bat 'npm run ngh --dir=dist/ngx-bs-modal-demo'
        // bat 'npx angular-cli-ghpages --dir=dist/ngx-bs-modal-demo'

        // bat 'git config --global user.email "ajayjagtap.10@gmail.com"'
        // bat 'git config --global user.name "ajay-jagtap"'
        // bat 'git config --global user.password "Ajayjagtap@123"'
        // bat 'copy C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\jenkins-test\\dist\\ngx-bs-modal-demo\\ C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup'
        // bat 'git stash -u'
        // bat 'git checkout  -f gh-pages'
        // bat 'git pull'
        // bat 'copy C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\backup\\ C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins\\.jenkins\\workspace\\jenkins-test'
        // bat 'git add .'
        // bat 'git commit -m "Pushed changes form jenkins"'
        // bat 'git push'

        // bat 'cd dist/ngx-bs-modal-demo'

        // bat 'rmdir dist /s /q'
        // bat 'rmdir node_modules /s /q'
        // bat 'git add dist/ngx-bs-modal-demo'

        // bat 'git reset -- node_modules/*'
        // bat 'git reset -- dist/*'
        // bat 'git reset --hard'
    }
}