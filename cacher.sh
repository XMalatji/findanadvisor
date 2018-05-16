#!/bin/bash

# Clean xcode generated crap
rm -rf ios/YOUR_PROJECT.xcodeproj/xcuserdata/

# Clean build
rm -rf ios/build/

# Remove relevant react-native cache files
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*
rm -rf $TMPDIR/react-*

# sanity!
rm -rf node_modules