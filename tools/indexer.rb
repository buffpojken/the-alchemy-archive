#!/usr/bin/env ruby
# encoding: utf-8
require 'algolia'
require 'yaml'

client = Algolia::Search::Client.create('DFQ9TOZCS7', '1b904ef14bda33aa7d3f85cecfd298dd')

content = File.read('_site/index.json')
drinks  = JSON.parse(content)

index = client.init_index('drinks_alpha')
drinks = drinks.map{|d| d.transform_keys(&:to_sym) }
index.save_objects(drinks)