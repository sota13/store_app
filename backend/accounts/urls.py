from django.urls import path
from .views import (MyTokenObtainPairView,
                    registerUser,
                    getUsers,
                    getUserProfile,
                    getUserById,
                    updateUserProfile,
                    updateUser,
                    deleteUser,
                    )


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view()),
    path('register/', registerUser),
    path('profile/', getUserProfile),
    path('profile/update/', updateUserProfile, name="user-profile-update"),
    path('', getUsers),
    path('<str:pk>/', getUserById),
    path('update/<str:pk>/', updateUser),
    path('delete/<str:pk>/', deleteUser),

]
