#include<bits/stdc++.h>
using namespace std;

class teacher{

    double salary;
    public:
    string name;
    string dept;
    int age;
    
    teacher(string str,int x){
        name = str;
        age = x;
        dept = "Com[uter]";
    }

    void setsalary(double s)
    {
        salary = s;
    }
    
    double getsalary()
    {
        cout<<salary<<endl;
    }
    void changedept(string newdept)
    {
        dept = newdept;
    }
};

int main()
{
    teacher t1("hello",18);
    cout<<t1.age<<endl;
    cout<<t1.name<<endl;
    cout<<t1.dept<<endl;
    teacher t2(t1);
    cout<<t2.age<<endl;
    cout<<t2.name<<endl;
    cout<<t2.dept<<endl;
    return 0;
}