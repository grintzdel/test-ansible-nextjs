#!/bin/bash

# Script de nettoyage rapide du serveur

SERVER="34.39.56.246"
USER="mathis.oudin-gcp"
KEY="~/.ssh/gcp_nextjs"

echo "🧹 Nettoyage du serveur $SERVER..."

ssh -i $KEY $USER@$SERVER << 'ENDSSH'
echo "Arrêt des processus PM2..."
pm2 delete all 2>/dev/null || true

echo "Arrêt des processus Node.js..."
sudo killall node 2>/dev/null || true

echo "Libération du port 3000..."
sudo lsof -ti:3000 | xargs sudo kill -9 2>/dev/null || true

echo "Vérification du port 3000..."
if netstat -tuln | grep 3000 > /dev/null; then
    echo "⚠️  Le port 3000 est toujours utilisé"
    netstat -tuln | grep 3000
else
    echo "✅ Le port 3000 est libre"
fi

echo "Statut PM2:"
pm2 list

ENDSSH

echo ""
echo "✅ Nettoyage terminé !"
echo ""
echo "Pour redéployer maintenant, exécutez :"
echo "  git checkout main"
echo "  git merge develop"
echo "  git push origin main"
