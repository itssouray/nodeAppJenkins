pipeline {
    agent any

    // Automatically trigger the build when code is pushed
    triggers {
        githubPush()
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📥 Cloning Repository...'
                git branch: 'main', url: 'https://github.com/itssouray/nodeAppJenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing Dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                echo '🔧 Building Application...'
                sh 'node index.js &'
            }
        }

        stage('Post Build') {
            steps {
                echo '✅ Build Completed Successfully!!'
            }
        }
    }
}
