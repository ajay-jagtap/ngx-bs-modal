
node {
    stage('Checkout SCM'){
        git branch: 'jenkins-test', url: 'https://github.com/ajay-jagtap/ngx-bs-modal.git'
    }

    stage('Install node nodules'){
        bat 'npm install'
    }

    stage('Test'){
        bat 'ng test'
    }

    stage('Build'){
        bat 'ng build --prod'
    }
}