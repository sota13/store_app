from django.urls import path
from . import views


urlpatterns = [

    path('', views.getOrders),
    path('add/', views.addOrderItems),
    path('myorders/', views.getMyOrders),

    path('<str:pk>/deliver/', views.updateOrderToDelivered),

    path('<str:pk>/', views.getOrderById),
    path('<str:pk>/pay/', views.updateOrderToPaid),
]
