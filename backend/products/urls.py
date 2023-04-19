from django.urls import path
from . import views


urlpatterns = [

    path('', views.getProducts),

    path('create/', views.createProduct),
    path('upload/', views.uploadImage),

    path('<str:pk>/reviews/', views.createProductReview),
    path('top/', views.getTopProducts),
    path('<str:pk>/', views.getProduct),

    path('update/<str:pk>/', views.updateProduct),
    path('delete/<str:pk>/', views.deleteProduct),
]
