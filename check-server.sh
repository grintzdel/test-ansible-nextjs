#!/bin/bash

# Script de diagnostic du serveur

SERVER="34.39.56.246"
USER="mathis.oudin-gcp"
KEY="~/.ssh/gcp_nextjs"

echo "🔍 DIAGNOSTIC DU SERVEUR $SERVER"
echo "=================================="
echo ""

ssh -i $KEY $USER@$SERVER << 'ENDSSH'

echo "📁 1. Recherche de l'application..."
echo "-----------------------------------"
find /home -name "test-ansible-nextjs" -type d 2>/dev/null || echo "❌ Dossier test-ansible-nextjs non trouvé"
find /home -name "*nextjs*" -type d 2>/dev/null || echo "❌ Aucun dossier nextjs trouvé"
find /home -name "app" -type d 2>/dev/null || echo "❌ Aucun dossier app trouvé"

echo ""
echo "👤 2. Utilisateurs disponibles..."
echo "-----------------------------------"
ls -la /home/

echo ""
echo "📦 3. Processus PM2..."
echo "-----------------------------------"
pm2 list
pm2 status

echo ""
echo "🔌 4. Ports en écoute..."
echo "-----------------------------------"
netstat -tuln | grep LISTEN | grep -E "(3000|80|443)" || echo "❌ Aucun port web en écoute"

echo ""
echo "⚙️  5. Node.js et NPM..."
echo "-----------------------------------"
which node
node --version || echo "❌ Node.js non installé"
which npm
npm --version || echo "❌ NPM non installé"
which pm2
pm2 --version || echo "❌ PM2 non installé"

echo ""
echo "📝 6. Processus Node.js actifs..."
echo "-----------------------------------"
ps aux | grep node | grep -v grep || echo "❌ Aucun processus Node.js"

echo ""
echo "🌐 7. Variables d'environnement utilisateur..."
echo "-----------------------------------"
echo "USER: $USER"
echo "HOME: $HOME"
echo "PWD: $PWD"

ENDSSH

echo ""
echo "✅ Diagnostic terminé !"
