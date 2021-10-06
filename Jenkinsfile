
node {
    stage('Checkout SCM'){
        git branch: 'jenkins-test', url: 'https://github.com/ajay-jagtap/ngx-bs-modal.git'
    }

    stage('Install node nodules'){
        sh 'npm install'
    }

    stage('Test'){
        sh 'npm run test'
    }

    stage('Test'){
        sh 'npm run build --prod'
    }
}