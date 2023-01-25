#!/usr/bin/env bash
set -euo pipefail

image_tag=${BUILDKITE_COMMIT}

kubectl apply -f ./kube/config.yml -n fma
kubectl set image -n fma deployment/suyash-mastermind-frontend-deployment suyash-mastermind-frontend=docker.myob.com/future-makers-academy/suyash-mastermind-frontend:$image_tag