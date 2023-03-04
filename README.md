# Setup

1. Make sure you run Ruby 3.1.2 - other version might work but 3.1.2 is what is known to work. 
2. Run "bundle install"
3. Name sure you run Node 16 at least - later versions should work fine, but haven't been tested. 
4. Make sure you have "yarn" installed - "npm install -g yarn"
5. Install js-packages with "yarn install"
6. Start the development server with "foreman start"
7. Access the page at http://localhost:4000

Source code for UI and SPA is in /src. 
Assets are compiled from /assets. 
Content uses the exact same format as previously, and is compiled from the respective folders, and
loaded from json for maximum flexibility. 