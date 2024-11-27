#include<bits/stdc++.h>
using namespace std;

//Revision Day - 1

int sum(int n){
    if(n==0){
        return 0;
    }
    return n + sum(n-1);
}

int factorial(int n){
    if(n==0){
        return 1;
    }
    return n * factorial(n-1);
}

//Sum of the array
int sum_array(int arr[], int n ){
    if(n == -1){
        return 0;
    }
    return arr[n] + sum_array(arr, n-1);
}

//Digit sum

int digit_sum(int n){
    if(n == 0){
        return 0;
    }
    return (n%10 + digit_sum(n/10));
}

//Generate Paranthesis

vector<string> result;
void generate(int open, int close, string &s){
    if(open == 0 && close == 0){
        // cout<<s<<endl;
        result.push_back(s);
        return;
    }
    if(open > 0 ){
        s.push_back('(');
        generate(open-1, close, s);
        s.pop_back(); //backtracking
    }

    if(close > 0){
        if(close < open){
            s.push_back(')');
            generate(open, close-1, s);
            s.pop_back(); //backtracking
        }
    }

}




int main() {
    
    int arr1[5] = {1,2,3,4,5};
    int n = 5;
    cout<<sum(5)<<endl;
    cout<<factorial(5)<<endl;
    cout<<sum_array(arr1, n-1)<<endl;
    cout<<digit_sum(222)<<endl;
    cout<<(16%4)<<endl;
    cout<<(16/4)<<endl;
    return 0;
}