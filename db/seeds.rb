# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

u1 = User.create(name: 'guest', password: 'password')
u2 = User.create(name: 'jasim', password: 'password')
u3 = User.create(name: 'noalle', password: 'password')
u4 = User.create(name: 'nijim', password: 'password')
u5 = User.create(name: 'jack', password: 'password')


c1 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/CandleFlickeringH264.mov')
t1 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/222390-maxresdefault.jpg')
c2 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/CandleStock1720p.mov')
t2 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/4d4e18d9cf20d3039201fb4f185e0e498275cb06.jpeg')
c3 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/FREEStockVideoDOWNLOADCreepyVintageDollsHD.mp4')
t3 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/Brody-Ghost-Story.jpg')
c4 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/FREEStockVideoDOWNLOADDecomposingDollHD.mp4')
t4 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/Hammersmith_Ghost.png')
c5 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/Ghost_Doll_3_Pack.mp4')
t5 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/f025c347dc9197a7566eb5edfaa6ade4.preview.jpg')
c6 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/Ipad_Red_Sky.mp4')
t6 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/ghost-796x498.jpg')
c7 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/MoonAndClouds_1.mp4')
t7 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/ghost-ads-image.jpg')
c8 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/_Scary_Ominous_Light_Flickers_in_Hotel_Corridor_Out_of_Focus.mp4')
t8 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/ghost-story.jpg')
c9 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/motionplaces+hong+kong00007-Oct2018.mp4')
t9 = open('https://boo-tube-seeds.s3.us-east-2.amazonaws.com/thumbnails/maxresdefault.jpg')

u1.video.attach(io: v1, filename: 'candle_flicker.mp4')
u2.video.attach(io: v2, filename: 'candle_stock.mp4')
u3.video.attach(io: v3, filename: 'creepy_doll.mp4')
u4.video.attach(io: v4, filename: 'decomposing_doll.mp4')
u5.video.attach(io: v5, filename: 'ghost_doll.mp4')
u6.video.attach(io: v6, filename: 'red_sky.mp4')
u7.video.attach(io: v7, filename: 'moon_and_cloud.mp4')
u8.video.attach(io: v8, filename: 'light_flicker.mp4')
u9.video.attach(io: v9, filename: 'hong_kong.mp4')

v1 = Video.create(title: 'Candle Flicker', description: 'Scary candles flickering in the dark', video_url: c1, thumbnail_url: t1)
v2 = Video.create(title: 'Scary Candles', description: 'Creepy candles that look really scary', video_url: c2, thumbnail_url: t2)
v3 = Video.create(title: 'Creepy Doll', description: 'Creepy doll that will haught your dreams', video_url: c3, thumbnail_url: t3)
v4 = Video.create(title: 'Decomposing Doll', description: 'Scary dolls that were found decomposing in dirt', video_url: c4, thumbnail_url: t4)
v5 = Video.create(title: 'Ghost Doll', description: 'A doll that looks like a ghost', video_url: c5, thumbnail_url: t5)
v6 = Video.create(title: 'Red Sky', description: 'Spooky red sky', video_url: c6, thumbnail_url: t6)
v7 = Video.create(title: 'Moon and Cloud', description: 'A haughty looking night', video_url: c7, thumbnail_url: t7)
v8 = Video.create(title: 'Light Flicker', description: 'Scary flickering light', video_url: c8, thumbnail_url: t8)
v9 = Video.create(title: 'Hong Kong', description: 'People in Hong-Kong', video_url: c9, thumbnail_url: t9)