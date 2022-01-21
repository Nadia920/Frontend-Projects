num = int(input())
if num < 1:
    print('no army')
elif 1 < num < 9:
    print('few')
elif 10 < num < 49:
    print('pack')
elif 50 < num < 499:
    print('horde')
elif 500 < num < 999:
    print('swarm')
elif num > 1000:
    print('legion')