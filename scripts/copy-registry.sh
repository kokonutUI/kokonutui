#!/bin/bash

COMPONENTS_DIR="components"
REGISTRY_DIR="registry"

# Default component folders if no argument is provided
COMPONENT_FOLDERS=(
    "ai-input"
    "buttons"
    "cards"
    "forms"
    "pricing"
)

mkdir -p "$REGISTRY_DIR"

# If a folder argument is provided, only copy that folder
if [ $# -eq 1 ]; then
    COMPONENT_FOLDERS=("$1")
fi

for folder in "${COMPONENT_FOLDERS[@]}"; do
    if [ -d "$COMPONENTS_DIR/$folder" ]; then
        echo "Copying $folder components..."
        cp -r "$COMPONENTS_DIR/$folder"/* "$REGISTRY_DIR/"
        
        if [ $? -eq 0 ]; then
            echo "✅ $folder components copied successfully"
        else
            echo "❌ Error copying $folder components"
            exit 1
        fi
    else
        echo "⚠️  Warning: $folder directory not found in components"
    fi
done

echo "✅ All component folders processed"
