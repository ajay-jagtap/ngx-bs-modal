
node {
    stage('Checkout SCM'){
        git branch: 'jenkins-test', url: 'https://github.com/ajay-jagtap/ngx-bs-modal.git'
    }

    stage('Install node nodules'){
        bat 'npm install'
    }

    stage('Test'){
        bat 'npm run test'
    }

    stage('Build'){
        bat 'npm run build --prod'
    }
}