
node {
    stage('Checkout SCM') {
        git branch: 'jenkins-test', url: 'ssh://git@github.com:ajay-jagtap/ngx-bs-modal.git'
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
        bat 'npm run build'
    }

    stage('Push to Github') {
        // bat 'git reset --hard'
        bat 'git checkout  -f gh-pages'
        // bat 'cd dist/ngx-bs-modal-demo'
        bat 'git add dist/ngx-bs-modal-demo'
        bat 'git commit -m "Pushed changes form jenkins"'
        bat 'git push'
    }
}